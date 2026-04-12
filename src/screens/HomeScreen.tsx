import { motion } from "framer-motion";
import { Footprints, Flame, Heart, Droplets, TrendingUp, Zap } from "lucide-react";
import ProgressRing from "@/components/ProgressRing";
import StatCard from "@/components/StatCard";

const HomeScreen = () => {
  const greeting = "Good Morning, Alex! 💪";
  const motivation = "You're doing great today!";

  return (
    <div className="px-4 pt-12 pb-28 max-w-lg mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-1"
      >
        <h1 className="text-2xl font-bold text-foreground">{greeting}</h1>
        <p className="text-muted-foreground text-sm">{motivation}</p>
      </motion.div>

      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="gradient-hero rounded-3xl p-6 text-primary-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent)]" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={18} />
            <span className="text-sm font-semibold opacity-90">Daily Progress</span>
          </div>
          <div className="flex items-center justify-around">
            <ProgressRing
              progress={72}
              size={90}
              strokeWidth={7}
              color="hsl(152 60% 48%)"
              label="Steps"
              value="7,234"
              icon={<Footprints size={14} className="text-primary-foreground" />}
            />
            <ProgressRing
              progress={58}
              size={90}
              strokeWidth={7}
              color="hsl(25 95% 60%)"
              label="Calories"
              value="1,450"
              icon={<Flame size={14} className="text-primary-foreground" />}
            />
            <ProgressRing
              progress={85}
              size={90}
              strokeWidth={7}
              color="hsl(330 80% 60%)"
              label="Heart"
              value="72"
              icon={<Heart size={14} className="text-primary-foreground" />}
            />
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          icon={<Footprints size={18} className="text-primary-foreground" />}
          label="Steps"
          value="7,234"
          unit="/ 10k"
          gradient="gradient-primary"
          delay={0.2}
        />
        <StatCard
          icon={<Flame size={18} className="text-primary-foreground" />}
          label="Calories"
          value="1,450"
          unit="kcal"
          gradient="gradient-warm"
          delay={0.25}
        />
        <StatCard
          icon={<Heart size={18} className="text-primary-foreground" />}
          label="Heart Rate"
          value="72"
          unit="bpm"
          gradient="gradient-accent"
          delay={0.3}
        />
        <StatCard
          icon={<Droplets size={18} className="text-primary-foreground" />}
          label="Water"
          value="6"
          unit="/ 8 glasses"
          gradient="gradient-primary"
          delay={0.35}
        />
      </div>

      {/* Weekly Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-5"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-foreground">This Week</h3>
          <div className="flex items-center gap-1 text-primary text-xs font-medium">
            <TrendingUp size={14} />
            <span>+12%</span>
          </div>
        </div>
        <div className="flex items-end justify-between gap-2 h-24">
          {[40, 65, 45, 80, 55, 90, 72].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-lg gradient-primary opacity-80"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.5 + i * 0.05, duration: 0.5, ease: "easeOut" }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="flex-1 text-center text-[10px] text-muted-foreground font-medium">{d}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomeScreen;
