import { motion } from "framer-motion";
import { Award, Target, TrendingUp, Flame, Heart, Footprints, Settings, ChevronRight, Star } from "lucide-react";
import ProgressRing from "@/components/ProgressRing";

const achievements = [
  { name: "First 10K Steps", icon: Footprints, earned: true },
  { name: "Week Streak", icon: Flame, earned: true },
  { name: "Heart Champion", icon: Heart, earned: true },
  { name: "Marathon Ready", icon: Award, earned: false },
  { name: "Social Star", icon: Star, earned: false },
];

const goals = [
  { name: "Daily Steps", current: 7234, target: 10000, unit: "steps" },
  { name: "Weekly Workouts", current: 4, target: 5, unit: "sessions" },
  { name: "Monthly Distance", current: 42, target: 100, unit: "km" },
];

const ProfileScreen = () => (
  <div className="px-4 pt-12 pb-28 max-w-lg mx-auto space-y-6">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-between"
    >
      <div>
        <h1 className="text-2xl font-bold text-foreground">Profile</h1>
        <p className="text-sm text-muted-foreground">Your fitness journey</p>
      </div>
      <button className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
        <Settings size={20} className="text-muted-foreground" />
      </button>
    </motion.div>

    {/* Profile Card */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="gradient-hero rounded-3xl p-6 text-primary-foreground text-center"
    >
      <div className="w-20 h-20 rounded-full bg-primary-foreground/20 backdrop-blur-sm mx-auto mb-3 flex items-center justify-center text-3xl">
        🏃
      </div>
      <h2 className="text-xl font-bold">Alex Johnson</h2>
      <p className="text-sm opacity-80 mb-4">Fitness enthusiast since 2024</p>
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Workouts", value: "142" },
          { label: "Heart Pts", value: "2,430" },
          { label: "Streak", value: "12 🔥" },
        ].map((s, i) => (
          <div key={i}>
            <p className="text-lg font-bold">{s.value}</p>
            <p className="text-[10px] opacity-70">{s.label}</p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Achievements */}
    <div>
      <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
        <Award size={16} className="text-fitness-orange" /> Achievements
      </h3>
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className={`glass-card p-3 flex flex-col items-center gap-2 min-w-[80px] ${
              !a.earned ? "opacity-40" : ""
            }`}
          >
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
              a.earned ? "gradient-warm" : "bg-secondary"
            }`}>
              <a.icon size={18} className={a.earned ? "text-primary-foreground" : "text-muted-foreground"} />
            </div>
            <span className="text-[10px] text-muted-foreground font-medium text-center leading-tight">{a.name}</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Goals */}
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
        <Target size={16} className="text-fitness-green" /> Fitness Goals
      </h3>
      {goals.map((g, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="glass-card p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-foreground">{g.name}</p>
            <p className="text-xs text-muted-foreground">
              {g.current} / {g.target} {g.unit}
            </p>
          </div>
          <div className="h-2 rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full gradient-primary"
              initial={{ width: 0 }}
              animate={{ width: `${(g.current / g.target) * 100}%` }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Stats */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
        <TrendingUp size={16} className="text-fitness-blue" /> Progress Stats
      </h3>
      <div className="flex justify-around">
        <ProgressRing progress={72} size={80} strokeWidth={6} color="hsl(152 60% 48%)" label="Steps" value="72%" />
        <ProgressRing progress={80} size={80} strokeWidth={6} color="hsl(210 90% 56%)" label="Workouts" value="80%" />
        <ProgressRing progress={42} size={80} strokeWidth={6} color="hsl(262 60% 58%)" label="Distance" value="42%" />
      </div>
    </motion.div>
  </div>
);

export default ProfileScreen;
