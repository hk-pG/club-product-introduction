import { FC, useEffect, useState } from "react";
import { Button } from "../molecules/Button";

const Fetch: FC = () => {
  const [id, setId] = useState("hk-p114514");
  const [name, setName] = useState("");
  const ids = [
    "hk-p114514",
    "gaearon",
    "aws",
    "google",
    "facebook",
    "twitter",
    "oukayuka",
  ];

  const getRandomId = (): void => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    setId(_id);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
      })
      .catch((error) => {
        console.log("catchだお\n" + error);
      });
  }, [id]);

  return (
    <>
      <h2>This is Fetch component</h2>
      <p>
        {id}の、GitHub上の名前は{name}です
      </p>
      <Button text="Idを変更" color="primary" func={getRandomId} />
    </>
  );
};

export { Fetch };
