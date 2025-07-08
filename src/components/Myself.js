import React from "react";

const PROFILE = {
  name: "Soham Basanwar",
  birthDate: "2005-12-03",
  gender: "Male",
  hobbies: ["Baking Sweets", "Painting"],
  research: ["AI and Emotions", "Behavioral Psychology"],
  country: "India",
  currentStatus: "Undergrad Student",
  university: "University of Illinois Chicago",
};

// eslint-disable-next-line no-undef
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    // Adjust age if the current date is before the birthday in the current year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

function Myself() {
    const age = calculateAge(PROFILE.birthDate);
    const profileData = { ...PROFILE, age };
    return (
        <div className="myself-header text-center mb-1">
            <h3>Who is {PROFILE.name} ?</h3>
            <div className="blob-container myself flex-with-center">
                <div className="blob">
                    {/*<h3>Hello, Soham Here</h3>*/}
                    {/*<hr/>*/}
                    <p>
                      <pre>{JSON.stringify(profileData, null, 2)}</pre>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Myself