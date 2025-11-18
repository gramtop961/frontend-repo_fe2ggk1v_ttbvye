import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full flex items-center">
      {/* Background gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(234,179,8,0.12),transparent_40%),radial-gradient(600px_circle_at_100%_0%,rgba(234,179,8,0.12),transparent_40%)]" />

      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xa5cMvp2ipgnnda2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-2 gap-10 py-24">
        <div className="text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-neutral-900/60 px-3 py-1 text-xs text-yellow-300/90 mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
            Live for gamers and creators
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(250,204,21,0.35)]">
            Welcome to HiveHub
          </h1>
          <p className="mt-4 text-neutral-200 text-lg max-w-xl">
            A buzzing home for clans, streams, and competitive play. Organize your squad, track stats, and discover events — all in one place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#get-started" className="px-5 py-3 rounded-md bg-yellow-400 text-neutral-900 font-semibold hover:bg-yellow-300 transition-colors">
              Start Free
            </a>
            <a href="#features" className="px-5 py-3 rounded-md border border-yellow-500/30 text-yellow-300 hover:border-yellow-400 hover:text-yellow-200 transition-colors">
              Explore Features
            </a>
          </div>

          <div className="mt-8 text-sm text-neutral-300/80">
            No credit card needed • Cancel anytime
          </div>
        </div>

        <div className="hidden md:block" />
      </div>
    </section>
  );
}
