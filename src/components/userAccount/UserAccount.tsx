import avatarImg from "@images/avatar.png";

interface UserAccountProps {
  name: string;
}

const UserAccount = ({ name }: UserAccountProps) => {
  return (
    <>
      <div className="flex items-center gap-[10px]">
        <img src={avatarImg} alt="avatar" />
        <div className="text-[16px] leading-[150%]">{name}</div>
      </div>
    </>
  );
};

export default UserAccount;
