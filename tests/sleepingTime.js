const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const repeatedGreetings = async () => {
  await sleep(5000)
  console.log("First")
  await sleep(3000)
  console.log("Second")
  await sleep(10000)
  console.log("Third")
}

repeatedGreetings()