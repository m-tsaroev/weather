import { Settings } from 'lucide-react'

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
}

export { ICONS }
