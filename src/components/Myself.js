import React from "react";
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
    const age = calculateAge("2005-12-3");
    return (
        <div className="myself-header text-center mb-1">
            <h3>Who is Soham ?</h3>
            <div className="blob-container myself flex-with-center">
                <div className="blob">
                    {/*<h3>Hello, Soham Here</h3>*/}
                    {/*<hr/>*/}
                    <p className="mt-5">
                    <pre>{JSON.stringify(
                        {
                        name: "Soham Basanwar",
                        age: age,
                        gender: "Male",
                        hobbies: ["Baking Sweets", "Painting"],
                        Research: ["AI and Emotions", "Behavioral Psychology"],
                        Country: "India",

                        current_status: "Undergrad Student",
                        University: "University of Illinois Chicago",
                    }, null, 2)}</pre>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Myself