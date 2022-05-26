import { useEffect } from "react";
import Contact from "./Contact";

const RightSidebar = ({ getUsers, users }) => {
  const style = {
    wrapper: `w-[24rem] text-lg text-white`,
    title: `text-[#afb3b8] font-semibold`,
  };

  useEffect(() => {
    (async () => {
      await getUsers();
    })();
  }, []);

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Contacts</div>
      <>
        {users?.map((user) => {
          return <Contact key={user.walletAddress} user={user} />;
        })}
      </>
    </div>
  );
};

export default RightSidebar;
