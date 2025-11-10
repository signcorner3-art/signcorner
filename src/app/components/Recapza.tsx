import React, { useRef, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";


type Props = { siteKey?: string; onVerify: (token: string | null) => void };


export default function Recapza({ siteKey, onVerify }: Props) {
const widgetRef = useRef<ReCAPTCHA | null>(null);
// prefer explicit prop, then NEXT_PUBLIC_... env var
const key = siteKey || process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;


const handleChange = useCallback((token: string | null) => onVerify(token), [onVerify]);


if (!key) {
// Show clear UI message and also log to console for dev
console.error(
"reCAPTCHA site key not found. Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY in .env.local or pass siteKey prop to <Recapza />"
);
return (
<div className="text-red-400">
reCAPTCHA site key not found. Check NEXT_PUBLIC_RECAPTCHA_SITE_KEY.
<div className="text-xs text-gray-400 mt-2">(Open your terminal, set env and restart dev server)</div>
</div>
);
}


return (
<div>
<ReCAPTCHA
ref={widgetRef as any} // react-google-recaptcha types sometimes demand this cast
sitekey={key}
onChange={handleChange}
onExpired={() => onVerify(null)}
/>
</div>
);
}

