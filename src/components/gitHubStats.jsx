import React from "react";

const GithubStats = () => {
  return (
    <section className="text-center py-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-3xl font-bold mb-6">My GitHub Stats</h2>

      {/* Typing SVG */}
      {/* <div className="flex justify-center mb-8">
        <img
          src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=500&size=30&pause=1000&color=00D4FF&center=true&vCenter=true&width=600&height=60&lines=Web+Developer;MERN+Stack+Developer"
          alt="Typing SVG"
          className="rounded-md"
        />
      </div> */}

      {/* GitHub Trophies */}
      <div className="flex justify-center mb-8">
        <img
          src="https://github-profile-trophy.vercel.app/?username=jaykumar108&theme=radical&no-frame=false&no-bg=true&margin-w=4"
          alt="GitHub Trophies"
        />
      </div>

      {/* Stats & Streaks */}
      <div className="flex flex-wrap justify-center gap-4">
        <img
          src="https://github-readme-stats.vercel.app/api?username=jaykumar108&theme=tokyonight&hide_border=false&include_all_commits=true&count_private=true"
          alt="GitHub Stats"
          className="w-[380px]"
        />
        <img
          src="https://nirzak-streak-stats.vercel.app/?user=jaykumar108&theme=tokyonight&hide_border=false"
          alt="GitHub Streak"
          className="w-[380px]"
        />
      </div>
    </section>
  );
};

export default GithubStats;
