import { useState } from "react";

export default function MembershipForm() {
  const [menuItems, setMenuItems] = useState([
    {
      category: "Membership",
      actions: ["Add", "Update"],
    },
    {
      category: "Books/Movies",
      actions: ["Add", "Update"],
    },
    {
      category: "User Management",
      actions: ["Add", "Update"],
    },
  ]);

  const [membershipForm, setMembershipForm] = useState({
    firstName: "",
    lastName: "",
    contactName: "",
    contactAddress: "",
    adadharCardNo: "",
    startDate: "",
    endDate: "",
    membershipDuration: "six months",
  });

  const handleMembershipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMembershipForm({
      ...membershipForm,
      [name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
       

        <div className="grid grid-cols-2 gap-4">
         
          <div className="col-span-1">
            <h2 className="text-lg font-semibold mb-4">Add Membership</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-medium mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={membershipForm.firstName}
                  onChange={handleMembershipChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={membershipForm.lastName}
                  onChange={handleMembershipChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Contact Name</label>
                <input
                  type="text"
                  name="contactName"
                  value={membershipForm.contactName}
                  onChange={handleMembershipChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Contact Address</label>
                <input
                  type="text"
                  name="contactAddress"
                  value={membershipForm.contactAddress}
                  onChange={handleMembershipChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Adadhar Card No</label>
                <input
                  type="text"
                  name="adadharCardNo"
                  value={membershipForm.adadharCardNo}
                  onChange={handleMembershipChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={membershipForm.startDate}
                  onChange={handleMembershipChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={membershipForm.endDate}
                  onChange={handleMembershipChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Membership Duration</label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="membershipDuration"
                      value="six months"
                      checked={membershipForm.membershipDuration === "six months"}
                      onChange={handleMembershipChange}
                      className="mr-2"
                    />
                    Six Months
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="membershipDuration"
                      value="one year"
                      checked={membershipForm.membershipDuration === "one year"}
                      onChange={handleMembershipChange}
                      className="mr-2"
                    />
                    One Year
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="membershipDuration"
                      value="two years"
                      checked={membershipForm.membershipDuration === "two years"}
                      onChange={handleMembershipChange}
                      className="mr-2"
                    />
                    Two Years
                  </label>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
