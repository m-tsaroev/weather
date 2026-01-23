import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoon,
  CloudRain,
  CloudSnow,
  CloudSun,
  Cloudy,
  Moon,
  Settings,
  Sun,
} from 'lucide-react'

const ICONS = {
  CLOUD: (
    <svg xmlns='http://www.w3.org/2000/svg' width={53} height={36} fill='none'>
      <path
        stroke='#8F8888'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={3}
        d='M13.143 34C6.713 34 1.5 28.981 1.5 22.791c0-6.188 5.213-11.205 11.643-11.205.982-4.405 4.485-8 9.187-9.433 4.7-1.43 9.89-.482 13.61 2.5 3.72 2.975 5.405 7.518 4.425 11.923h2.475c4.782 0 8.66 3.9 8.66 8.715 0 4.817-3.877 8.718-8.663 8.718H13.142'
      />
    </svg>
  ),
  GEAR: <Settings />,
  WEATHER: {
    1000: { day: Sun, night: Moon },

    // --- ОБЛАЧНОСТЬ ---
    1003: { day: CloudSun, night: CloudMoon },
    1006: { day: Cloudy, night: Cloudy },
    1009: { day: Cloud, night: Cloud },

    // --- ТУМАН / ДЫМКА ---
    1030: { day: CloudFog, night: CloudFog },
    1135: { day: CloudFog, night: CloudFog },
    1147: { day: CloudFog, night: CloudFog },

    // --- МЕЛКИЙ ДОЖДЬ ---
    1150: { day: CloudDrizzle, night: CloudDrizzle },
    1153: { day: CloudDrizzle, night: CloudDrizzle },
    1168: { day: CloudDrizzle, night: CloudDrizzle },
    1171: { day: CloudDrizzle, night: CloudDrizzle },

    // --- ДОЖДЬ ---
    1063: { day: CloudRain, night: CloudRain },
    1180: { day: CloudRain, night: CloudRain },
    1183: { day: CloudRain, night: CloudRain },
    1186: { day: CloudRain, night: CloudRain },
    1189: { day: CloudRain, night: CloudRain },
    1192: { day: CloudRain, night: CloudRain },
    1195: { day: CloudRain, night: CloudRain },
    1240: { day: CloudRain, night: CloudRain },
    1243: { day: CloudRain, night: CloudRain },
    1246: { day: CloudRain, night: CloudRain },

    // --- ЛЕДЯНОЙ ДОЖДЬ / СИЛЬНЫЙ ЛЕДЯНОЙ ДОЖДЬ ---
    1198: { day: CloudRain, night: CloudRain },
    1201: { day: CloudRain, night: CloudRain },

    // --- СНЕГ / МЕТЕЛЬ ---
    1066: { day: CloudSnow, night: CloudSnow },
    1069: { day: CloudSnow, night: CloudSnow },
    1072: { day: CloudSnow, night: CloudSnow },
    1114: { day: CloudSnow, night: CloudSnow },
    1117: { day: CloudSnow, night: CloudSnow },
    1210: { day: CloudSnow, night: CloudSnow },
    1213: { day: CloudSnow, night: CloudSnow },
    1216: { day: CloudSnow, night: CloudSnow },
    1219: { day: CloudSnow, night: CloudSnow },
    1222: { day: CloudSnow, night: CloudSnow },
    1225: { day: CloudSnow, night: CloudSnow },
    1255: { day: CloudSnow, night: CloudSnow },
    1258: { day: CloudSnow, night: CloudSnow },

    // --- ГРАД ---
    1237: { day: CloudHail, night: CloudHail },
    1261: { day: CloudHail, night: CloudHail },
    1264: { day: CloudHail, night: CloudHail },

    // --- ГРОЗА ---
    1087: { day: CloudLightning, night: CloudLightning },
    1273: { day: CloudLightning, night: CloudLightning },
    1276: { day: CloudLightning, night: CloudLightning },
    1279: { day: CloudLightning, night: CloudLightning },
    1282: { day: CloudLightning, night: CloudLightning },
  },
}

type WeatherCode = keyof typeof ICONS.WEATHER

export { ICONS, type WeatherCode }
