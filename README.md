# mock-server

## Setup

```ts
if (process.env.NODE_ENV === 'development') {
  await worker.start()
}
```

## Usage

```ts
fetch('/todos', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
```
