import { Hexagon, Users, Trophy, Radio } from "lucide-react";

const features = [
  {
    icon: <Users className="text-yellow-400" size={24} />,
    title: "Squad Hives",
    desc: "Create private or public groups, coordinate matches, and chat in real-time.",
  },
  {
    icon: <Trophy className="text-yellow-400" size={24} />,
    title: "Rank & Stats",
    desc: "Track performance across games with sharable stat cards and leaderboards.",
  },
  {
    icon: <Radio className="text-yellow-400" size={24} />,
    title: "Streams & Events",
    desc: "Discover live streams, tournaments, and community events tailored for you.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(250,204,21,0.1),transparent_40%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Hexagon className="text-yellow-400" size={20} />
            <span className="text-yellow-300 text-sm font-medium">Why HiveHub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for the swarm</h2>
          <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
            Everything you need to build, manage, and grow your gaming community — beautifully integrated.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="relative rounded-xl border border-yellow-500/10 bg-neutral-900/50 p-6 hover:border-yellow-400/30 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-neutral-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
