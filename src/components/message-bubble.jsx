export const MessageBubble = ({ messageData }) => {
  return (
    <div className="flex">
      <div className="bg-[#444444] rounded-lg p-4">{messageData.message}</div>
    </div>
  );
};
