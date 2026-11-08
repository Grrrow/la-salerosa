export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ ok: false, error: "Method not allowed" });
	}

	try {
		const body =
			typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

		// Protección anti-bots en servidor: Honeypot relleno o envío instantáneo (<1.2s)
		if (body.website || (body.elapsedMs && Number(body.elapsedMs) < 1200)) {
			return res.status(200).json({ ok: true });
		}

		const email = (body.email || "").trim().toLowerCase();
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

		if (!email || !emailRegex.test(email)) {
			return res.status(400).json({ ok: false, error: "Invalid email" });
		}

		const payload = {
			email,
			single: body.single || "La Salerosa",
			artist: body.artist || "Mar Morán",
			createdAt: new Date().toISOString(),
		};

		const webhookUrl =
			process.env.PUBLIC_WEBHOOK_URL ||
			process.env.AIRTABLE_WEBHOOK_URL ||
			"https://script.google.com/macros/s/AKfycbw6hLROxqC1mIc2-BG8mfqdWTtqAriYIzTm59JnGsA4Tm3EuH7MWXz1kkj1ZPqlbPgb/exec";

		if (webhookUrl) {
			const response = await fetch(webhookUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
				},
				body: new URLSearchParams(payload).toString(),
				redirect: "follow",
			});

			if (!response.ok && response.status !== 302) {
				const text = await response.text().catch(() => "");
				return res
					.status(502)
					.json({ ok: false, error: "Webhook error", details: text });
			}

			return res.status(200).json({ ok: true });
		}

		return res
			.status(500)
			.json({ ok: false, error: "Missing PUBLIC_WEBHOOK_URL" });
	} catch (err) {
		return res.status(500).json({ ok: false, error: "Server error" });
	}
}
