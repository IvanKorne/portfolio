import React from "react";
import { Send } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="flex py-3 group items-center text-gray-300 justify-center rounded-full transition-all hover:scale-110 gap-2 bg-black hover:!bg-gray-900 disabled:opacity-70 disabled:scale-100"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-bg-white"></div>
      ) : (
        <>
          Submit
          <Send className="transition-all opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
