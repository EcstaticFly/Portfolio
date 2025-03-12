import { recentActivities } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const RecentActivities = () => {
  return (
    <section id="activities" className="py-20">
      <h1 className="heading">
        My Recent
        <span className="text-purple"> Progress</span> and <span className="text-purple"> Activities</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {recentActivities.map((activity) => (
          <Button
            key={activity.id}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 cursor-default text-white border-neutral-200 dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className=" flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
             <div className="text-start">
             <img
                src={activity.thumbnail}
                alt={activity.title}
                className="lg:w-32 md:w-20 w-16"
              />
             </div>

              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {activity.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {activity.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default RecentActivities;
