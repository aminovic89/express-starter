const { test, before, after } = require("node:test");
const assert = require("node:assert");
const app = require("../src/app");

let server, base;

before(async () => {
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      base = `http://127.0.0.1:${server.address().port}`;
      resolve();
    });
  });
});

after(() => server.close());

test("GET /health répond ok", async () => {
  const res = await fetch(`${base}/health`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.status, "ok");
});

test("GET /api/hello utilise le paramètre name", async () => {
  const res = await fetch(`${base}/api/hello?name=Amine`);
  const body = await res.json();
  assert.equal(body.message, "Hello, Amine!");
});

test("POST /api/echo renvoie le corps en 201", async () => {
  const res = await fetch(`${base}/api/echo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ a: 1 }),
  });
  assert.equal(res.status, 201);
  const body = await res.json();
  assert.deepEqual(body.received, { a: 1 });
});
