import AccountDeletionRequest from "./AccountDeletionRequest";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="mt-[100px] z-[9999] h-screen flex justify-center items-top">
      <div className="sm:w-1/3 w-2/3 absolute z-[9999]">
        <AccountDeletionRequest></AccountDeletionRequest>
      </div>
    </div>
  );
}
