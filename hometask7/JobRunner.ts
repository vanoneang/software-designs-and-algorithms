
export class JobRunner {
  private queue: number[]
  private size: number
  private counter: number

  constructor(size: number) {
    this.size = size
    this.queue = []
    this.counter = 0
  }

  run() {
    while(this.counter <= this.size) {
      const firstPriority = this.getHighestPriorityTask()
      const newRandomValue = Math.floor(Math.random() * this.size);
      this.addTask((firstPriority + newRandomValue) % this.size)
    }
  }

  addTask(task: number): void {
    this.queue.push(task)
  }

  getHighestPriorityTask() {
    for (let i = this.queue.length - 1; i > 1; i--) {
      this.getMaxHeapify(Math.floor(i / 2));
    }
    this.counter++
    if (this.counter % 1000 === 0) {
      console.log(`Just finished ${this.counter} task and it's value was: ${this.queue.splice(1, 1)[0]}`);
    }
    return this.queue.splice(1, 1)[0]
  }

  private getMaxHeapify(i: number) {
    const l = 2 * i;
    const r = 2 * i + 1;
    let largest;

    if (l <= this.queue.length && this.queue[l] > this.queue[i]) {
      largest = l;
    } else {
      largest = i;
    }

    if (r <= this.queue.length && this.queue[r] > this.queue[largest]) {
      largest = r;
    }

    if (largest != i) {
      [this.queue[i], this.queue[largest]] = [this.queue[largest], this.queue[i]];
      this.getMaxHeapify(this.queue[largest]);
    }
  }
}