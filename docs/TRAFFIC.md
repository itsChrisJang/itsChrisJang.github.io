# Visit statistics

Create a GoatCounter site at https://www.goatcounter.com/signup. Set the reporting timezone to Asia/Seoul. Enable “Allow adding visitor counts on your website”. Keep the default session setting for visits (repeat views in a session are deduplicated).

Set `_data/traffic.yml` endpoint to the site origin, e.g. `https://YOURCODE.goatcounter.com`, and enabled to true. No API key is required or exposed. Tracking loads on every content page; the home page displays site-wide totals, today, and the last seven calendar days.

The widget stays hidden until configured. Errors show unavailable, never a fabricated zero. GoatCounter caches counters for up to four hours, so these are delayed counts, not realtime. Data begins after activation and cannot reconstruct earlier visits.

Source: https://www.goatcounter.com/help/visitor-counter
