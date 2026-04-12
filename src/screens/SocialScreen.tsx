import { motion } from "framer-motion";
import { Trophy, Users, Target, Crown, Medal, Award } from "lucide-react";

const leaderboard = [
  { name: "Sarah K.", points: 2840, rank: 1, avatar: "🏆" },
  { name: "Mike R.", points: 2650, rank: 2, avatar: "🥈" },
  { name: "You", points: 2430, rank: 3, avatar: "🥉" },
  { name: "Emma L.", points: 2100, rank: 4, avatar: "💪" },
  { name: "Jake T.", points: 1980, rank: 5, avatar: "🔥" },
];

const challenges = [
  { name: "10K Steps Daily", participants: 234, daysLeft: 3, progress: 72 },
  { name: "Drink 8 Glasses", participants: 156, daysLeft: 5, progress: 45 },
];

const friends = [
  { name: "Sarah K.", status: "Running 🏃", active: true },
  { name: "Mike R.", status: "Yoga session", active: true },
  { name: "Emma L.", status: "Last seen 2h ago", active: false },
];

const SocialScreen = () => (
  <div className="px-4 pt-12 pb-28 max-w-lg mx-auto space-y-6">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-bold text-foreground">Community</h1>
      <p className="text-sm text-muted-foreground">Compete, connect, conquer</p>
    </motion.div>

    {/* Weekly Challenges */}
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
        <Target size={16} className="text-fitness-orange" /> Weekly Challenges
      </h3>
      {challenges.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.1 }}
          className="glass-card p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-foreground">{c.name}</p>
            <span className="text-[10px] text-fitness-orange font-medium">{c.daysLeft} days left</span>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>{c.participants} participants</span>
            <span>{c.progress}%</span>
          </div>
          <div className="h-2 rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full gradient-primary"
              initial={{ width: 0 }}
              animate={{ width: `${c.progress}%` }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>
        </motion.div>
      ))}
    </div>

    {/* Leaderboard */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-5"
    >
      <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
        <Trophy size={16} className="text-fitness-orange" /> Leaderboard
      </h3>
      <div className="space-y-3">
        {leaderboard.map((user, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.06 }}
            className={`flex items-center gap-3 p-3 rounded-xl ${
              user.name === "You" ? "bg-primary/10 border border-primary/20" : ""
            }`}
          >
            <span className="text-lg w-8 text-center">{user.avatar}</span>
            <div className="flex-1">
              <p className={`text-sm font-semibold ${user.name === "You" ? "text-primary" : "text-foreground"}`}>
                {user.name}
              </p>
            </div>
            <p className="text-sm font-bold text-foreground">{user.points.toLocaleString()}<span className="text-[10px] text-muted-foreground ml-1">pts</span></p>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Friends */}
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
        <Users size={16} className="text-fitness-blue" /> Friends
      </h3>
      {friends.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + i * 0.08 }}
          className="glass-card p-4 flex items-center gap-3"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-foreground">
              {f.name[0]}
            </div>
            {f.active && (
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-fitness-green border-2 border-card" />
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{f.name}</p>
            <p className="text-xs text-muted-foreground">{f.status}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default SocialScreen;
