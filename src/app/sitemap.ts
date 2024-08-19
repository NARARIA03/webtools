import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://webtoolstack.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko",
          en: "https://webtoolstack.com/en",
        },
      },
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://webtoolstack.com/developer",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/developer",
          en: "https://webtoolstack.com/en/developer",
        },
      },
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://webtoolstack.com/text",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/text",
          en: "https://webtoolstack.com/en/text",
        },
      },
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://webtoolstack.com/daily",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/daily",
          en: "https://webtoolstack.com/en/daily",
        },
      },
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://webtoolstack.com/image",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/image",
          en: "https://webtoolstack.com/en/image",
        },
      },
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://webtoolstack.com/file",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/file",
          en: "https://webtoolstack.com/en/file",
        },
      },
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://webtoolstack.com/test",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/test",
          en: "https://webtoolstack.com/en/test",
        },
      },
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://webtoolstack.com/math",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/math",
          en: "https://webtoolstack.com/en/math",
        },
      },
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://webtoolstack.com/lottery",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/lottery",
          en: "https://webtoolstack.com/en/lottery",
        },
      },
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://webtoolstack.com/developer/base64EncodeDecode",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/developer/base64EncodeDecode",
          en: "https://webtoolstack.com/en/developer/base64EncodeDecode",
        },
      },
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://webtoolstack.com/text/countLetters",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/text/countLetters",
          en: "https://webtoolstack.com/en/text/countLetters",
        },
      },
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://webtoolstack.com/daily/bmiCalculator",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/daily/bmiCalculator",
          en: "https://webtoolstack.com/en/daily/bmiCalculator",
        },
      },
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://webtoolstack.com/developer/rgbHexConverter",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/developer/rgbHexConverter",
          en: "https://webtoolstack.com/en/developer/rgbHexConverter",
        },
      },
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://webtoolstack.com/developer/qrCodeGenerator",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/developer/qrCodeGenerator",
          en: "https://webtoolstack.com/en/developer/qrCodeGenerator",
        },
      },
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://webtoolstack.com/developer/syntaxHighlighter",
      lastModified: new Date(),
      alternates: {
        languages: {
          ko: "https://webtoolstack.com/ko/developer/syntaxHighlighter",
          en: "https://webtoolstack.com/en/developer/syntaxHighlighter",
        },
      },
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
