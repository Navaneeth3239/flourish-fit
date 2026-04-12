import { motion } from "framer-motion";
import { Moon, Brain, Heart, TrendingUp, Sparkles } from "lucide-react";

const insights = [
  { icon: Moon, label: "Sleep", value: "7h 23m", trend: "+12%", msg: "Your sleep improved by 12%!", color: "text-fitness-purple" },
  { icon: Brain, label: "Stress", value: "Low", trend: "-8%", msg: "Stress levels are decreasing", color: "text-fitness-blue" },
  { icon: Heart, label: "Heart Rate", value: "68 bpm", trend: "-3%", msg: "Resting HR is improving", color: "text-fitness-pink" },
];

const sleepData = [6.5, 7.2, 5.8, 7.5, 8.0, 7.3, 7.4];

const HealthScreen = () => (
  <div className="px-4 pt-12 pb-28 max-w-lg mx-auto space-y-6">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold text-foreground">Health Insights</h1>
      <p className="text-sm text-muted-foreground">AI-powered health analysis</p>
    </motion.div>

    {/* AI Insight Card */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="gradient-accent rounded-3xl p-5 text-primary-foreground"
    >
      <div className="flex items-center gap-2 mb-3">
        <Sparkles size={18} />
        <span className="text-sm font-semibold">AI Health Summary</span>
      </div>
      <p className="text-sm opacity-90 leading-relaxed">
        Your overall health score is <span className="font-bold">87/100</span>. Sleep quality improved this week, 
        and your resting heart rate trend looks excellent. Keep it up! 🎯
      </p>
    </motion.div>

    {/* Metrics */}
    {insights.map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + i * 0.1 }}
        className="glass-card p-4"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-secondary flex items-center justify-center">
              <item.icon size={20} className={item.color} />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.msg}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-foreground">{item.value}</p>
            <div className="flex items-center gap-0.5 text-primary text-xs">
              <TrendingUp size={12} />
              <span>{item.trend}</span>
            </div>
          </div>
        </div>
      </motion.div>
    ))}

    {/* Sleep Chart */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-foreground mb-4">Sleep This Week</h3>
      <div className="flex items-end justify-between gap-2 h-28">
        {sleepData.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-lg gradient-accent"
            style={{ opacity: 0.6 + (h / 10) * 0.4 }}
            initial={{ height: 0 }}
            animate={{ height: `${(h / 9) * 100}%` }}
            transition={{ delay: 0.6 + i * 0.05, duration: 0.5 }}
          />
        ))}
      </div>
      <div className="flex justify-between mt-2">
        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
          <span key={i} className="flex-1 text-center text-[10px] text-muted-foreground">{d}</span>
        ))}
      </div>
    </motion.div>
  </div>
);

export default HealthScreen;
