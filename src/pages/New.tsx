import Form from "../components/Form";

export default function New() {
  return (
    <>
      <div className="mb-5 items-start justify-between border-b py-4 md:flex">
        <div>
          <h3 className="text-2xl font-bold text-gray-800">New</h3>
        </div>
      </div>
      <Form />
    </>
  );
}