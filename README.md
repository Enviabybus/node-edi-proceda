# ActiveJobProcessor

Interface for adapters to work with async jobs on node.

## Install

```
npm install @enviabybus/active-job-processor
```

## Adapters

[Bull Adapter](https://github.com/Enviabybus/node-active-job-processor-bull-adapter)

[Google Cloud Tasks Adapter](https://github.com/Enviabybus/node-active-job-processor-cloud-tasks-adapter)

## Creating a job

```ts
// src/jobs/ping.job.ts

class PingJob {
  static perform(message: string): void {
    console.log(message);
  }
}

export default PingJob;
```

## How to use

```ts
// src/index.ts

import ActiveJobProcessor, { initActiveJobProcessor } from '@enviabybus/active-job-processor';
import ActiveJobProcessorBullAdapter from '@enviabybus/active-job-processor-bull-adapter';

import PingJob from './jobs/ping.job.ts'

initActiveJobProcessor(path.resolve(__dirname, './jobs'));

const adapter = new ActiveJobProcessorBullAdapter();
const jobProcessor = new ActiveJobProcessor(adapter);

jobProcessor.performLater(PingJob, ['pong']);
jobProcessor.performIn(5000, PingJob, ['pong']);
jobProcessor.performAt(new Date(), PingJob, ['pong']);
```
