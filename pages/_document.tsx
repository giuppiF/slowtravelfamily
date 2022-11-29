import { Head, Html, Main, NextScript } from "next/document";
import { useRouter } from "next/router";
import Script from "next/script";

export default function Document() {
  return (
    <Html className="h-full bg-gray-50">
      <Head>
        <GAHeader />
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
        <IubendaCookieBanner />
      </body>
    </Html>
  );
}

const IubendaCookieBanner = () => {
  const script = `<script type="text/javascript">
  var _iub = _iub || [];
  _iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"consentOnContinuedBrowsing":false,"countryDetection":true,"enableCcpa":true,"enableLgpd":true,"floatingPreferencesButtonDisplay":"bottom-right","invalidateConsentWithoutLog":true,"lgpdAppliesGlobally":false,"perPurposeConsent":true,"siteId":2831268,"whitelabel":false,"cookiePolicyId":17159544,"lang":"it", "banner":{ "acceptButtonDisplay":true,"closeButtonDisplay":false,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-top-center","rejectButtonDisplay":true }};
  </script>
  <script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"></script>
  <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>`;
  return <div dangerouslySetInnerHTML={{ __html: script }}></div>;
};

const GAHeader = () => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  const gt = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  if (!gt) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gt}`}
      />
      <Script id="analytics" strategy="afterInteractive">{`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gt}', {
      page_path: window.location.pathname,
    });
  `}</Script>
    </>
  );
};
