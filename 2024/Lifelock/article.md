#Lifelock

Imagine an intersection where all drivers are overly polite and insist on letting the others go first. Unfortunately, the result is that none of the cars actually proceed, leading to a situation where everyone is stuck, despite no one being actively blocked.

A similar phenomenon can occur in computer systems when several processing units running in parallel constantly adjust their actions to avoid conflicts but never make progress. In a livelock scenario, processing units keep changing their state in response to each other, preventing any of them from completing their tasks.

Since computer processes cannot observe that they’re being "too polite," rules must be implemented to ensure progress and avoid lifelocks.

## Author 
Fabian Dudler