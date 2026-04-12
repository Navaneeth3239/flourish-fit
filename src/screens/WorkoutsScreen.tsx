import { motion } from "framer-motion";
import { Dumbbell, Heart, Wind, Flame, Timer, ChevronRight } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", label: "All" },
  { id: "cardio", label: "Cardio" },
  { id: "strength", label: "Strength" },
  { id: "yoga", label: "Yoga" },
  { id: "hiit", label: "HIIT" },
];

const workouts = [
  { name: "Full Body Blast", category: "strength", duration: "45 min", cal: "450", level: "Intermediate", icon: Dumbbell, color: "text-fitness-green" },
  { name: "Morning Yoga Flow", category: "yoga", duration: "30 min", cal: "180", level: "Beginner", icon: Heart, color: "text-fitness-purple" },
  { name: "HIIT Cardio Burn", category: "hiit", duration: "25 min", cal: "380", level: "Advanced", icon: Flame, color: "text-fitness-orange" },
  { name: "Breathing & Stretch", category: "yoga", duration: "15 min", cal: "80", level: "Beginner", icon: Wind, color: "text-fitness-blue" },
  { name: "Upper Body Power", category: "strength", duration: "40 min", cal: "400", level: "Intermediate", icon: Dumbbell, color: "text-fitness-green" },
  { name: "Sprint Intervals", category: "cardio", duration: "20 min", cal: "320", level: "Advanced", icon: Timer, color: "text-fitness-pink" },
];

const WorkoutsScreen = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = activeCategory === "all" ? workouts : workouts.filter(w => w.category === activeCategory);

  return (
    <div className="px-4 pt-12 pb-28 max-w-lg mx-auto space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-bold text-foreground">Workouts</h1>
        <p className="text-sm text-muted-foreground">100+ workouts to choose from</p>
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex gap-2 overflow-x-auto no-scrollbar"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? "gradient-primary text-primary-foreground"
                : "glass-card text-muted-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </motion.div>

      {/* Featured */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
        className="gradient-warm rounded-3xl p-5 text-primary-foreground"
      >
        <p className="text-[10px] font-semibold opacity-80 uppercase tracking-wider mb-1">Featured</p>
        <p className="text-lg font-bold">7-Day Challenge</p>
        <p className="text-sm opacity-80 mb-3">Full body transformation program</p>
        <button className="bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-semibold">
          Start Challenge →
        </button>
      </motion.div>

      {/* Workout List */}
      <div className="space-y-3">
        {filtered.map((w, i) => (
          <motion.div
            key={w.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.06 }}
            className="glass-card p-4 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
              <w.icon size={22} className={w.color} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">{w.name}</p>
              <p className="text-xs text-muted-foreground">{w.duration} • {w.cal} kcal • {w.level}</p>
            </div>
            <ChevronRight size={18} className="text-muted-foreground" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutsScreen;
