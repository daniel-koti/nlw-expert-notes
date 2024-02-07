import { useNavigate } from 'react-router-dom'
import { DotBackgroundLayout } from '@/components/ui/dot-background-layout'
import { Spotlight } from '@/components/ui/spotlight'

import logo from '@/assets/logo-nlw-experts.svg'

export function Home() {
  const navigate = useNavigate()

  function handleNavigateToNotes() {
    navigate('/notes')
  }

  return (
    <DotBackgroundLayout>
      <Spotlight />
      <img src={logo} alt="NLW Experts" className="absolute top-8" />
      <div className="flex flex-col justify-center items-center">
        <strong className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-500 py-8">
          Expert Notes
        </strong>
        <button
          onClick={handleNavigateToNotes}
          className="relative w-full inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BEF264_0%,#393BB2_50%,#BEF264_100%)]" />
          <span className="inline-flex h-full font-semibold w-full cursor-pointer items-center justify-center rounded-full bg-slate-700 hover:bg-slate-800 hover:text-lime-400 transition-all px-3 py-1 text-base text-slate-50 backdrop-blur-3xl">
            Ir para as minhas notas
          </span>
        </button>
      </div>
      <span className="absolute bottom-5 text-sm font-semibold text-lime-300">
        Desenvolvido por: @daniel-koti
      </span>
    </DotBackgroundLayout>
  )
}
