import React, { useRef, useCallback } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type Props = { siteKey?: string; onVerify: (token: string | null) => void; };

export default function Recapza({ siteKey, onVerify }: Props) {
  const widgetRef = useRef<ReCAPTCHA | null>(null);
  const key = siteKey ?? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const handleChange = useCallback((token: string | null) => onVerify(token), [onVerify]);

  if (!key) return <div className="text-red-400">reCAPTCHA site key not found. Check NEXT_PUBLIC_RECAPTCHA_SITE_KEY</div>;

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
