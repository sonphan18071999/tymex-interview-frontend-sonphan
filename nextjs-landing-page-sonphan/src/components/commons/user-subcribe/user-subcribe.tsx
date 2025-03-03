import { Input } from "antd";

const UserSubscribe = () => {
  return (
    <div className=" text-white p-8 text-center">
      <h2 className="text-lg font-bold tracking-widest mb-4">
        SUBSCRIBE TO RECEIVE OUR LATEST UPDATE
      </h2>
      <div className="flex justify-center items-center gap-4">
        <Input
          type="email"
          placeholder="Your email address"
          className="w-full py-2"
        />
        <button className="primary-btn">Subscribe</button>
      </div>
    </div>
  );
};

export default UserSubscribe;
