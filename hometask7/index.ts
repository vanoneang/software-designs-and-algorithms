import { JobRunner } from "./JobRunner";


const jobRunner = new JobRunner(10000)


for (let i = 0; i < 10000; i++) {
  const task = Math.floor(Math.random() * 10000);
  jobRunner.addTask(task);
}

jobRunner.run()