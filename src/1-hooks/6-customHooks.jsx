import React, { useEffect } from "react";

// making custom hook from built in hooks

const fetchAndCreateResponse = async (url, options) => {
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (err) {
    return ({ status: "error", message: err.message });
  }
}

const progressStatus = { status: "progress", message: null };
const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(progressStatus);
  const [tick, setTick] = React.useState(0);

  useEffect(() => {
    setResponse(progressStatus);
    fetchAndCreateResponse(url, options).then(setResponse);
  }, [url, options, tick]);
  return [response, () => { setTick(tick + 1) }];
};

// use custom hooks to make domain related hooks

const useRandomDogImage = () => {
  const [response, refetch] = useFetch(
    "https://dog.ceo/api/breeds/image/random"
  );
  return [response, refetch];
};

// ---- MAIN

const Main = () => {
  const [{ status, message }, refetch] = useRandomDogImage();

  if (status === "error") {
    return <button onClick={refetch}>{message} - Try again</button>;
  } else if (status === "progress") {
    return "Loading...";
  }

  return <img alt="dog" onClick={refetch} src={message} />;
};

export default Main;
