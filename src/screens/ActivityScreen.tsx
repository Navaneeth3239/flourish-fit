import { motion } from "framer-motion";
import { MapPin, Timer, Zap, Flame, Play, Bike, PersonStanding } from "lucide-react";

const activities = [
  { type: "Running", icon: PersonStanding, distance: "5.2 km", time: "32:15", cal: "420", color: "text-fitness-green" },
  { type: "Cycling", icon: Bike, distance: "12.8 km", time: "45:30", cal: "380", color: "text-fitness-blue" },
];

const ActivityScreen = () => (
  <div className="px-4 pt-12 pb-28 max-w-lg mx-auto space-y-6">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold text-foreground">Activity</h1>
      <p className="text-sm text-muted-foreground">Track your runs and rides</p>
    </motion.div>

    {/* Start Activity */}
    <motion.button
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      whileTap={{ scale: 0.97 }}
      className="w-full gradient-hero rounded-3xl p-6 text-primary-foreground flex items-center justify-between"
    >
      <div className="text-left">
        <p className="text-lg font-bold">Start Activity</p>
        <p className="text-sm opacity-80">GPS ready • Clear skies</p>
      </div>
      <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
        <Play size={24} className="text-primary-foreground ml-0.5" />
      </div>
    </motion.button>

    {/* Live Stats Preview */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="glass-card p-5 space-y-4"
    >
      <h3 className="text-sm font-semibold text-foreground">Live Tracking Preview</h3>
      <div className="grid grid-cols-2 gap-4">
        {[
          { icon: MapPin, label: "Distance", value: "0.00", unit: "km", color: "text-fitness-green" },
          { icon: Zap, label: "Speed", value: "0.0", unit: "km/h", color: "text-fitness-blue" },
          { icon: Timer, label: "Duration", value: "00:00", unit: "", color: "text-fitness-purple" },
          { icon: Flame, label: "Calories", value: "0", unit: "kcal", color: "text-fitness-orange" },
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-3">
            <stat.icon size={20} className={stat.color} />
            <div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-lg font-bold text-foreground">
                {stat.value}
                <span className="text-xs text-muted-foreground ml-1">{stat.unit}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Recent Activities */}
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-foreground">Recent Activities</h3>
      {activities.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.1 }}
          className="glass-card p-4 flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
            <a.icon size={22} className={a.color} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-foreground">{a.type}</p>
            <p className="text-xs text-muted-foreground">{a.distance} • {a.time}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-foreground">{a.cal}</p>
            <p className="text-[10px] text-muted-foreground">kcal</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ActivityScreen;
