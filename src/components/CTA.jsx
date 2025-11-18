export default function CTA() {
  return (
    <section id="get-started" className="relative py-24 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_100%_30%,rgba(250,204,21,0.12),transparent_40%)] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-neutral-900/70 p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Join the Hive</h3>
          <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
            Claim your handle, spin up your first hive, and invite your squad. It takes less than a minute.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="px-5 py-3 rounded-md bg-yellow-400 text-neutral-900 font-semibold hover:bg-yellow-300 transition-colors w-full sm:w-auto">
              Create Account
            </a>
            <a href="#" className="px-5 py-3 rounded-md border border-yellow-500/30 text-yellow-300 hover:border-yellow-400 hover:text-yellow-200 transition-colors w-full sm:w-auto">
              View Demo
            </a>
          </div>
          <p className="mt-4 text-xs text-neutral-400">Free plan available • Pro starts at $8/mo</p>
        </div>
      </div>
    </section>
  );
}
