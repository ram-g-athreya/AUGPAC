var subject =
        {
            find: function(code)
            {
                //Error case need to be handled later
                for (i in this.subjects)
                {
                    if (this.subjects[i].code == code)
                        return {'text': this.subjects[i].text, 'credit': this.subjects[i].credit};
                }
                return null;
            },
            subjects: [
                {
                    "code": "AE2021",
                    "text": "Theory of Elasticity",
                    "credit": "3"
                },
                {
                    "code": "AE2022",
                    "text": "Aircraft General Engineering And Maintenance Practices",
                    "credit": "3"
                },
                {
                    "code": "AE2023",
                    "text": "Space Mechanics",
                    "credit": "3"
                },
                {
                    "code": "AE2024",
                    "text": "Heat Transfer",
                    "credit": "3"
                },
                {
                    "code": "AE2025",
                    "text": "Helicopter Theory",
                    "credit": "3"
                },
                {
                    "code": "AE2026",
                    "text": "Industrial Aerodynamics",
                    "credit": "3"
                },
                {
                    "code": "AE2027",
                    "text": "Airframe Maintenance and Repair",
                    "credit": "3"
                },
                {
                    "code": "AE2028",
                    "text": "Aero Engine Maintenance and Repair",
                    "credit": "3"
                },
                {
                    "code": "AE2029",
                    "text": "Theory of Plates and Shells",
                    "credit": "3"
                },
                {
                    "code": "AE2030",
                    "text": "Fatigue And Fracture",
                    "credit": "3"
                },
                {
                    "code": "AE2031",
                    "text": "Hypersonic Aerodynamics",
                    "credit": "3"
                },
                {
                    "code": "AE2032",
                    "text": "Experimental Aerodynamics",
                    "credit": "3"
                },
                {
                    "code": "AE2033",
                    "text": "Rockets and Missiles",
                    "credit": "3"
                },
                {
                    "code": "AE2034",
                    "text": "Structural Dynamics",
                    "credit": "3"
                },
                {
                    "code": "AE2035",
                    "text": "Air Traffic Control and Planning",
                    "credit": "3"
                },
                {
                    "code": "AE2036",
                    "text": "Production Planning And Control",
                    "credit": "3"
                },
                {
                    "code": "AE2037",
                    "text": "Engine System And Control",
                    "credit": "3"
                },
                {
                    "code": "AE2201",
                    "text": "Mechanics of Machines",
                    "credit": "4"
                },
                {
                    "code": "AE2202",
                    "text": "Aero Engineering Thermodynamics",
                    "credit": "4"
                },
                {
                    "code": "AE2203",
                    "text": "Solid Mechanics",
                    "credit": "4"
                },
                {
                    "code": "AE2204",
                    "text": "Elements of Aeronautics",
                    "credit": "3"
                },
                {
                    "code": "AE2206",
                    "text": "Strength of Materials Lab",
                    "credit": "2"
                },
                {
                    "code": "AE2207",
                    "text": "Thermodynamics Lab",
                    "credit": "2"
                },
                {
                    "code": "AE2251",
                    "text": "Aerodynamics - I",
                    "credit": "3"
                },
                {
                    "code": "AE2252",
                    "text": "Aircraft Systems and Instruments",
                    "credit": "3"
                },
                {
                    "code": "AE2253",
                    "text": "Production Technology",
                    "credit": "3"
                },
                {
                    "code": "AE2254",
                    "text": "Aircraft Structures - I",
                    "credit": "4"
                },
                {
                    "code": "AE2255",
                    "text": "Propulsion-I",
                    "credit": "3"
                },
                {
                    "code": "AE2257",
                    "text": "Aircraft Structures Lab - I",
                    "credit": "2"
                },
                {
                    "code": "AE2258",
                    "text": "Aerodynamics Lab",
                    "credit": "2"
                },
                {
                    "code": "AE2259",
                    "text": "Aircraft Component Drawing",
                    "credit": "2"
                },
                {
                    "code": "AE2301",
                    "text": "Flight Dynamics",
                    "credit": "3"
                },
                {
                    "code": "AE2302",
                    "text": "Aircraft Structures - II",
                    "credit": "4"
                },
                {
                    "code": "AE2303",
                    "text": "Aerodynamics - II",
                    "credit": "3"
                },
                {
                    "code": "AE2304",
                    "text": "Propulsion -II",
                    "credit": "3"
                },
                {
                    "code": "AE2305",
                    "text": "Aircraft Structures Laboratory - II",
                    "credit": "2"
                },
                {
                    "code": "AE2306",
                    "text": "Propulsion Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AE2307",
                    "text": "CAD/CAM Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AE2351",
                    "text": "Finite Element Method",
                    "credit": "3"
                },
                {
                    "code": "AE2352",
                    "text": "Experimental Stress Analysis",
                    "credit": "3"
                },
                {
                    "code": "AE2353",
                    "text": "Wind Tunnel Techniques",
                    "credit": "3"
                },
                {
                    "code": "AE2354",
                    "text": "High temperature materials",
                    "credit": "3"
                },
                {
                    "code": "AE2355",
                    "text": "Aero Engine Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AE2356",
                    "text": "Aircraft Design Project - I",
                    "credit": "2"
                },
                {
                    "code": "AE2357",
                    "text": "Airframe Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AE2401",
                    "text": "Avionics",
                    "credit": "3"
                },
                {
                    "code": "AE2402",
                    "text": "Computational Fluid Dynamics",
                    "credit": "3"
                },
                {
                    "code": "AE2403",
                    "text": "Vibrations And Elements of Aeroelasticity",
                    "credit": "3"
                },
                {
                    "code": "AE2404",
                    "text": "Aircraft Design Project - II",
                    "credit": "2"
                },
                {
                    "code": "AE2405",
                    "text": "Aircraft Systems Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AE2406",
                    "text": "Avionics Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AE2451",
                    "text": "Composite Materials And Structures",
                    "credit": "3"
                },
                {
                    "code": "AE2452",
                    "text": "Comprehension",
                    "credit": "1"
                },
                {
                    "code": "AE2453",
                    "text": "Project Work",
                    "credit": "6"
                },
                {
                    "code": "AG2211",
                    "text": "Applied Geology",
                    "credit": "3"
                },
                {
                    "code": "AT2021",
                    "text": "Automotive Air-conditioning",
                    "credit": "3"
                },
                {
                    "code": "AT2022",
                    "text": "Alternate Fuels and Energy Systems",
                    "credit": "3"
                },
                {
                    "code": "AT2023",
                    "text": "Vibration , Noise and Harshness Control",
                    "credit": "3"
                },
                {
                    "code": "AT2024",
                    "text": "Advanced Theory of I.C. Engines",
                    "credit": "3"
                },
                {
                    "code": "AT2026",
                    "text": "Supercharging And Scavenging",
                    "credit": "3"
                },
                {
                    "code": "AT2027",
                    "text": "Automotive Aero-dynamics",
                    "credit": "3"
                },
                {
                    "code": "AT2028",
                    "text": "Computer Simulation of I.C. Engines",
                    "credit": "3"
                },
                {
                    "code": "AT2029",
                    "text": "New Generation and Hybrid Vehicles",
                    "credit": "3"
                },
                {
                    "code": "AT2030",
                    "text": "Off Road Vehicles",
                    "credit": "3"
                },
                {
                    "code": "AT2031",
                    "text": "Project and Materials Management",
                    "credit": "3"
                },
                {
                    "code": "AT2032",
                    "text": "Engine Auxiliary Systems",
                    "credit": "3"
                },
                {
                    "code": "AT2033",
                    "text": "Automotive Safety",
                    "credit": "3"
                },
                {
                    "code": "AT2034",
                    "text": "Fuel Cell Technology",
                    "credit": "3"
                },
                {
                    "code": "AT2035",
                    "text": "Transport Management",
                    "credit": "3"
                },
                {
                    "code": "AT2037",
                    "text": "Metrology and Instrumentation",
                    "credit": "3"
                },
                {
                    "code": "AT2201",
                    "text": "Automotive Engines",
                    "credit": "3"
                },
                {
                    "code": "AT2203",
                    "text": "Engineering Thermodynamics",
                    "credit": "4"
                },
                {
                    "code": "AT2205",
                    "text": "Automotive Components Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AT2206",
                    "text": "Manufacturing Technology Lab",
                    "credit": "2"
                },
                {
                    "code": "AT2206",
                    "text": "Manufacturing Technology Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AT2207",
                    "text": "Fluid Mechanics and Machinery Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AT2251",
                    "text": "Applied Thermodynamics and Heat Transfer",
                    "credit": "4"
                },
                {
                    "code": "AT2252",
                    "text": "Automotive Chassis",
                    "credit": "3"
                },
                {
                    "code": "AT2255",
                    "text": "Engine Performance and Emission Testing Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AT2256",
                    "text": "Computer Aided Machine Drawing Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AT2257",
                    "text": "Electronics and Micro-processors Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AT2301",
                    "text": "Automotive Transmission",
                    "credit": "4"
                },
                {
                    "code": "AT2302",
                    "text": "Automotive Electrical and Electronics",
                    "credit": "3"
                },
                {
                    "code": "AT2303",
                    "text": "Vehicle Design and Data Characteristics",
                    "credit": "4"
                },
                {
                    "code": "AT2305",
                    "text": "Automotive Fuels and Lubricants",
                    "credit": "3"
                },
                {
                    "code": "AT2307",
                    "text": "Automotive Electrical and Electronics Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AT2308",
                    "text": "Automotive Fuels and Lubricants Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AT2351",
                    "text": "Automotive Engine Components Design",
                    "credit": "4"
                },
                {
                    "code": "AT2352",
                    "text": "Automotive Chassis Components Design",
                    "credit": "4"
                },
                {
                    "code": "AT2353",
                    "text": "Two and Three Wheelers",
                    "credit": "3"
                },
                {
                    "code": "AT2354",
                    "text": "Computer Aided Engine Design Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AT2355",
                    "text": "Computer Aided Chassis Design Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AT2356",
                    "text": "Two and Three Wheelers Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AT2401",
                    "text": "Engine and Vehicle Management System",
                    "credit": "4"
                },
                {
                    "code": "AT2402",
                    "text": "Vehicle Dynamics",
                    "credit": "4"
                },
                {
                    "code": "AT2403",
                    "text": "Vehicle Maintenance",
                    "credit": "3"
                },
                {
                    "code": "AT2404",
                    "text": "Automotive Pollution and Control",
                    "credit": "3"
                },
                {
                    "code": "AT2405",
                    "text": "Vehicle Maintenance and Re-conditioning Laboratory",
                    "credit": "2"
                },
                {
                    "code": "AT2451",
                    "text": "Vehicle Body Engineering",
                    "credit": "3"
                },
                {
                    "code": "AT2452",
                    "text": "Comprehension",
                    "credit": "1"
                },
                {
                    "code": "AT2453",
                    "text": "Project Work",
                    "credit": "6"
                },
                {
                    "code": "CE2021",
                    "text": "Hydrology",
                    "credit": "3"
                },
                {
                    "code": "CE2022",
                    "text": "Cartography",
                    "credit": "3"
                },
                {
                    "code": "CE2023",
                    "text": "Electronic Surveying",
                    "credit": "3"
                },
                {
                    "code": "CE2024",
                    "text": "Remote Sensing Techniques and GIS",
                    "credit": "3"
                },
                {
                    "code": "CE2025",
                    "text": "Architecture",
                    "credit": "3"
                },
                {
                    "code": "CE2026",
                    "text": "Traffic Engineering and Management",
                    "credit": "3"
                },
                {
                    "code": "CE2027",
                    "text": "Housing Planning and Management",
                    "credit": "3"
                },
                {
                    "code": "CE2028",
                    "text": "Ground Water Engineering",
                    "credit": "3"
                },
                {
                    "code": "CE2029",
                    "text": "Management of Irrigation Systems",
                    "credit": "3"
                },
                {
                    "code": "CE2030",
                    "text": "Coastal Zone Management",
                    "credit": "3"
                },
                {
                    "code": "CE2031",
                    "text": "Water Resources Engineering",
                    "credit": "3"
                },
                {
                    "code": "CE2032",
                    "text": "Pavement Engineering",
                    "credit": "3"
                },
                {
                    "code": "CE2033",
                    "text": "Ground Improvement Techniques",
                    "credit": "3"
                },
                {
                    "code": "CE2034",
                    "text": "Introduction to Soil Dynamics and Machine Foundations",
                    "credit": "3"
                },
                {
                    "code": "CE2035",
                    "text": "Rock Engineering",
                    "credit": "3"
                },
                {
                    "code": "CE2036",
                    "text": "Environmental Impact Assessment of Civil Engineering Projects",
                    "credit": "3"
                },
                {
                    "code": "CE2037",
                    "text": "Industrial Waste Management",
                    "credit": "3"
                },
                {
                    "code": "CE2038",
                    "text": "Air Pollution Management",
                    "credit": "3"
                },
                {
                    "code": "CE2039",
                    "text": "Municipal Solid Waste Management",
                    "credit": "3"
                },
                {
                    "code": "CE2040",
                    "text": "Ecological Engineering",
                    "credit": "3"
                },
                {
                    "code": "CE2041",
                    "text": "Bridge Structures",
                    "credit": "3"
                },
                {
                    "code": "CE2042",
                    "text": "Storage Structures",
                    "credit": "3"
                },
                {
                    "code": "CE2043",
                    "text": "Design of Plate and Shell Structures",
                    "credit": "3"
                },
                {
                    "code": "CE2044",
                    "text": "Tall Buildings",
                    "credit": "3"
                },
                {
                    "code": "CE2045",
                    "text": "Prefabricated structures",
                    "credit": "3"
                },
                {
                    "code": "CE2046",
                    "text": "Wind Engineering",
                    "credit": "3"
                },
                {
                    "code": "CE2047",
                    "text": "Computer Aided Design of Structures",
                    "credit": "3"
                },
                {
                    "code": "CE2048",
                    "text": "Industrial Structures",
                    "credit": "3"
                },
                {
                    "code": "CE2049",
                    "text": "Smart Structures and smart Materials",
                    "credit": "3"
                },
                {
                    "code": "CE2050",
                    "text": "Finite Element Techniques",
                    "credit": "3"
                },
                {
                    "code": "CE2071",
                    "text": "Repair and Rehabilitation of Structures",
                    "credit": "3"
                },
                {
                    "code": "CE2201",
                    "text": "Mechanics of Solids",
                    "credit": "4"
                },
                {
                    "code": "CE2202",
                    "text": "Mechanics of Fluids",
                    "credit": "4"
                },
                {
                    "code": "CE2203",
                    "text": "Construction Techniques, Equipment and Practice",
                    "credit": "4"
                },
                {
                    "code": "CE2204",
                    "text": "Surveying– I",
                    "credit": "3"
                },
                {
                    "code": "CE2207",
                    "text": "Survey Practical – I",
                    "credit": "2"
                },
                {
                    "code": "CE2208",
                    "text": "Computer Aided Building Drawing",
                    "credit": "2"
                },
                {
                    "code": "CE2251",
                    "text": "Soil Mechanics",
                    "credit": "3"
                },
                {
                    "code": "CE2252",
                    "text": "Strength of Materials",
                    "credit": "4"
                },
                {
                    "code": "CE2253",
                    "text": "Applied Hydraulic Engineering",
                    "credit": "4"
                },
                {
                    "code": "CE2254",
                    "text": "Surveying – II",
                    "credit": "3"
                },
                {
                    "code": "CE2255",
                    "text": "Highway Engineering",
                    "credit": "3"
                },
                {
                    "code": "CE2257",
                    "text": "Strength of Materials Lab",
                    "credit": "2"
                },
                {
                    "code": "CE2258",
                    "text": "Hydraulic Engineering Laboratory",
                    "credit": "2"
                },
                {
                    "code": "CE2259",
                    "text": "Survey Practical – II",
                    "credit": "2"
                },
                {
                    "code": "CE2301",
                    "text": "Irrigation Engineering",
                    "credit": "3"
                },
                {
                    "code": "CE2302",
                    "text": "Structural Analysis I",
                    "credit": "4"
                },
                {
                    "code": "CE2303",
                    "text": "Railways, Airports and Harbour Engineering",
                    "credit": "4"
                },
                {
                    "code": "CE2304",
                    "text": "Environmental Engineering I",
                    "credit": "3"
                },
                {
                    "code": "CE2305",
                    "text": "Foundation Engineering",
                    "credit": "3"
                },
                {
                    "code": "CE2306",
                    "text": "Design of RC Elements",
                    "credit": "4"
                },
                {
                    "code": "CE2307",
                    "text": "Concrete and Highway Engineering Lab",
                    "credit": "2"
                },
                {
                    "code": "CE2308",
                    "text": "Soil Mechanics Laboratory",
                    "credit": "2"
                },
                {
                    "code": "CE2351",
                    "text": "Structural Analysis – II",
                    "credit": "4"
                },
                {
                    "code": "CE2352",
                    "text": "Design of Steel Structures",
                    "credit": "4"
                },
                {
                    "code": "CE2353",
                    "text": "Construction Planning & Scheduling",
                    "credit": "3"
                },
                {
                    "code": "CE2354",
                    "text": "Environmental Engineering II",
                    "credit": "3"
                },
                {
                    "code": "CE2355",
                    "text": "Environmental and Irrigation Engineering Drawing",
                    "credit": "2"
                },
                {
                    "code": "CE2356",
                    "text": "Environmental Engineering Laboratory",
                    "credit": "2"
                },
                {
                    "code": "CE2357",
                    "text": "Survey Camp",
                    "credit": "3"
                },
                {
                    "code": "CE2401",
                    "text": "Design of Reinforced Concrete & Brick Masonry Structures",
                    "credit": "4"
                },
                {
                    "code": "CE2402",
                    "text": "Estimation and Quantity Surveying",
                    "credit": "3"
                },
                {
                    "code": "CE2403",
                    "text": "Basics of Dynamics and Aseismic Design",
                    "credit": "3"
                },
                {
                    "code": "CE2404",
                    "text": "Prestressed Concrete Structures",
                    "credit": "3"
                },
                {
                    "code": "CE2405",
                    "text": "Computer Aided Design and Drafting Laboratory",
                    "credit": "2"
                },
                {
                    "code": "CE2406",
                    "text": "Design Project",
                    "credit": "2"
                },
                {
                    "code": "CE2451",
                    "text": "Engineering Economics and Cost Analysis",
                    "credit": "3"
                },
                {
                    "code": "CE2453",
                    "text": "Project Work",
                    "credit": "6"
                },
                {
                    "code": "CE3011",
                    "text": "Hydrology",
                    "credit": "3"
                },
                {
                    "code": "CE3012",
                    "text": "Ground Water Contamination",
                    "credit": "3"
                },
                {
                    "code": "CE3202",
                    "text": "Mechanics Of Solids",
                    "credit": "4"
                },
                {
                    "code": "CE3203",
                    "text": "Fluid Mechanics",
                    "credit": "3"
                },
                {
                    "code": "CE3206",
                    "text": "Surveying",
                    "credit": "3"
                },
                {
                    "code": "CE3208",
                    "text": "Fluid Mechanics And Strength Of Materials Laboratory",
                    "credit": "2"
                },
                {
                    "code": "CE3209",
                    "text": "Surveying Laboratory",
                    "credit": "2"
                },
                {
                    "code": "CE3210",
                    "text": "Environmental Engineering Laboratory – I",
                    "credit": "2"
                },
                {
                    "code": "CE3211",
                    "text": "Soil Mechanics And Foundation Engineering",
                    "credit": "3"
                },
                {
                    "code": "CE3212",
                    "text": "Applied Hydraulics And Fluid Machines",
                    "credit": "3"
                },
                {
                    "code": "CE3215",
                    "text": "Water Supply Engineering",
                    "credit": "3"
                },
                {
                    "code": "CE3216",
                    "text": "Industrial  Safety",
                    "credit": "3"
                },
                {
                    "code": "CE3220",
                    "text": "Fluid Machinery Laboratory",
                    "credit": "2"
                },
                {
                    "code": "CS2021",
                    "text": "Multicore Programming",
                    "credit": "3"
                },
                {
                    "code": "CS2022",
                    "text": "Visual Programming",
                    "credit": "3"
                },
                {
                    "code": "CS2023",
                    "text": "Advanced JAVA Programming",
                    "credit": "3"
                },
                {
                    "code": "CS2024",
                    "text": "Parallel Programming",
                    "credit": "3"
                },
                {
                    "code": "CS2028",
                    "text": "UNIX Internals",
                    "credit": "3"
                },
                {
                    "code": "CS2029",
                    "text": "Advanced Database Technology",
                    "credit": "3"
                },
                {
                    "code": "CS2030",
                    "text": "High Performance Microprocessors",
                    "credit": "3"
                },
                {
                    "code": "CS2032",
                    "text": "Data Warehousing and Data Mining",
                    "credit": "3"
                },
                {
                    "code": "CS2033",
                    "text": "Real Time Systems",
                    "credit": "3"
                },
                {
                    "code": "CS2034",
                    "text": "TCP/IP Design and Implementation",
                    "credit": "3"
                },
                {
                    "code": "CS2035",
                    "text": "Natural Language Processing",
                    "credit": "3"
                },
                {
                    "code": "CS2040",
                    "text": "Advanced Operating Systems",
                    "credit": "3"
                },
                {
                    "code": "CS2041",
                    "text": "C# and .NET Framework",
                    "credit": "3"
                },
                {
                    "code": "CS2045",
                    "text": "Wireless Networks",
                    "credit": "3"
                },
                {
                    "code": "CS2051",
                    "text": "Graph Theory",
                    "credit": "3"
                },
                {
                    "code": "CS2053",
                    "text": "Soft Computing",
                    "credit": "3"
                },
                {
                    "code": "CS2055",
                    "text": "Software Quality Assurance",
                    "credit": "3"
                },
                {
                    "code": "CS2056",
                    "text": "Distributed Systems",
                    "credit": "3"
                },
                {
                    "code": "CS2057",
                    "text": "Knowledge Based Decision Support Systems",
                    "credit": "3"
                },
                {
                    "code": "CS2060",
                    "text": "High Speed Networks",
                    "credit": "3"
                },
                {
                    "code": "CS2061",
                    "text": "Robotics",
                    "credit": "3"
                },
                {
                    "code": "CS2062",
                    "text": "Quantum Computing",
                    "credit": "3"
                },
                {
                    "code": "CS2063",
                    "text": "Grid computing",
                    "credit": "3"
                },
                {
                    "code": "CS2063",
                    "text": "Grid Computing",
                    "credit": "3"
                },
                {
                    "code": "CS2064",
                    "text": "Agent Based Intelligent Systems",
                    "credit": "3"
                },
                {
                    "code": "CS2201",
                    "text": "Data Structures",
                    "credit": "3"
                },
                {
                    "code": "CS2202",
                    "text": "Digital Principles and Systems Design",
                    "credit": "4"
                },
                {
                    "code": "CS2203",
                    "text": "Object Oriented Programming",
                    "credit": "3"
                },
                {
                    "code": "CS2204",
                    "text": "Analog and Digital Communication",
                    "credit": "4"
                },
                {
                    "code": "CS2207",
                    "text": "Digital Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2208",
                    "text": "Data Structures Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2209",
                    "text": "Object Oriented Programming Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2251",
                    "text": "Design and Analysis of Algorithms",
                    "credit": "4"
                },
                {
                    "code": "CS2252",
                    "text": "Microprocessors and Microcontrollers",
                    "credit": "3"
                },
                {
                    "code": "CS2253",
                    "text": "Computer Organization and Architecture",
                    "credit": "3"
                },
                {
                    "code": "CS2254",
                    "text": "Operating Systems",
                    "credit": "3"
                },
                {
                    "code": "CS2255",
                    "text": "Database Management Systems",
                    "credit": "3"
                },
                {
                    "code": "CS2257",
                    "text": "Operating System Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2257",
                    "text": "Operating Systems Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2258",
                    "text": "Database Management Systems Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2258",
                    "text": "Data Base Management Systems Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2259",
                    "text": "Microprocessors Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2301",
                    "text": "Software Engineering",
                    "credit": "3"
                },
                {
                    "code": "CS2302",
                    "text": "Computer Networks",
                    "credit": "3"
                },
                {
                    "code": "CS2303",
                    "text": "Theory of Computation",
                    "credit": "4"
                },
                {
                    "code": "CS2304",
                    "text": "System Software",
                    "credit": "4"
                },
                {
                    "code": "CS2305",
                    "text": "Programming Paradigms",
                    "credit": "3"
                },
                {
                    "code": "CS2307",
                    "text": "Network Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2308",
                    "text": "System Software Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2309",
                    "text": "Java Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2351",
                    "text": "Artificial Intelligence",
                    "credit": "3"
                },
                {
                    "code": "CS2352",
                    "text": "Principles of Compiler Design",
                    "credit": "4"
                },
                {
                    "code": "CS2353",
                    "text": "Object Oriented Analysis and Design",
                    "credit": "3"
                },
                {
                    "code": "CS2354",
                    "text": "Advanced Computer Architecture",
                    "credit": "3"
                },
                {
                    "code": "CS2357",
                    "text": "Object Oriented Analysis and Design Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2358",
                    "text": "Internet Programming Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2401",
                    "text": "Computer Graphics",
                    "credit": "3"
                },
                {
                    "code": "CS2402",
                    "text": "Mobile and Pervasive Computing",
                    "credit": "3"
                },
                {
                    "code": "CS2403",
                    "text": "Digital Signal Processing",
                    "credit": "3"
                },
                {
                    "code": "CS2405",
                    "text": "Computer Graphics Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2406",
                    "text": "Open Source Lab",
                    "credit": "2"
                },
                {
                    "code": "CS2451",
                    "text": "Project Work",
                    "credit": "6"
                },
                {
                    "code": "CY2111",
                    "text": "Engineering Chemistry - 1",
                    "credit": "3"
                },
                {
                    "code": "CY2161",
                    "text": "Engineering Chemistry - II",
                    "credit": "3"
                },
                {
                    "code": "EC2021",
                    "text": "Medical Electronics",
                    "credit": "3"
                },
                {
                    "code": "EC2022",
                    "text": "Operating Systems",
                    "credit": "3"
                },
                {
                    "code": "EC2023",
                    "text": "Solid State Electronic Devices",
                    "credit": "3"
                },
                {
                    "code": "EC2027",
                    "text": "Advanced Microprocessors",
                    "credit": "3"
                },
                {
                    "code": "EC2028",
                    "text": "Internet and Java",
                    "credit": "3"
                },
                {
                    "code": "EC2029",
                    "text": "Digital Image Processing",
                    "credit": "3"
                },
                {
                    "code": "EC2030",
                    "text": "Advanced Digital Signal Processing",
                    "credit": "3"
                },
                {
                    "code": "EC2031",
                    "text": "Electromagnetic Interference and Compatibility",
                    "credit": "3"
                },
                {
                    "code": "EC2033",
                    "text": "Power Electronics",
                    "credit": "3"
                },
                {
                    "code": "EC2034",
                    "text": "Television and Video Engineering",
                    "credit": "3"
                },
                {
                    "code": "EC2035",
                    "text": "Cryptography and Network Security",
                    "credit": "3"
                },
                {
                    "code": "EC2036",
                    "text": "Information Theory",
                    "credit": "3"
                },
                {
                    "code": "EC2037",
                    "text": "Multimedia Compression and Communication",
                    "credit": "3"
                },
                {
                    "code": "EC2038",
                    "text": "Nano Electronics",
                    "credit": "3"
                },
                {
                    "code": "EC2039",
                    "text": "Parallel and Distributed Processing",
                    "credit": "3"
                },
                {
                    "code": "EC2041",
                    "text": "Avionics",
                    "credit": "3"
                },
                {
                    "code": "EC2042",
                    "text": "Embedded and Real Time Systems",
                    "credit": "3"
                },
                {
                    "code": "EC2043",
                    "text": "Wireless networks",
                    "credit": "3"
                },
                {
                    "code": "EC2044",
                    "text": "Telecommunication Switching and Networks",
                    "credit": "3"
                },
                {
                    "code": "EC2045",
                    "text": "Satellite Communication",
                    "credit": "3"
                },
                {
                    "code": "EC2046",
                    "text": "Advanced Electronic system design",
                    "credit": "3"
                },
                {
                    "code": "EC2047",
                    "text": "Optoelectronic devices",
                    "credit": "3"
                },
                {
                    "code": "EC2048",
                    "text": "Telecommunication System Modeling and Simulation",
                    "credit": "3"
                },
                {
                    "code": "EC2049",
                    "text": "Radar and Navigational Aids",
                    "credit": "3"
                },
                {
                    "code": "EC2050",
                    "text": "Mobile Adhoc Networks",
                    "credit": "3"
                },
                {
                    "code": "EC2051",
                    "text": "Wireless Sensor Networks",
                    "credit": "3"
                },
                {
                    "code": "EC2052",
                    "text": "Remote Sensing",
                    "credit": "3"
                },
                {
                    "code": "EC2053",
                    "text": "Engineering Acoustics",
                    "credit": "3"
                },
                {
                    "code": "EC2054",
                    "text": "Optical Networks",
                    "credit": "3"
                },
                {
                    "code": "EC2151",
                    "text": "Electric Circuits and Electron Devices",
                    "credit": "4"
                },
                {
                    "code": "EC2155",
                    "text": "Circuits and Devices Laboratory",
                    "credit": "2"
                },
                {
                    "code": "EC2201",
                    "text": "Electrical Engineering",
                    "credit": "3"
                },
                {
                    "code": "EC2202",
                    "text": "Data Structures and Object Oriented Programming in C++",
                    "credit": "3"
                },
                {
                    "code": "EC2203",
                    "text": "Digital Electronics",
                    "credit": "4"
                },
                {
                    "code": "EC2204",
                    "text": "Signals and systems",
                    "credit": "4"
                },
                {
                    "code": "EC2205",
                    "text": "Electronic Circuits- I",
                    "credit": "4"
                },
                {
                    "code": "EC2207",
                    "text": "Digital Electronics Lab",
                    "credit": "2"
                },
                {
                    "code": "EC2208",
                    "text": "Electronic Circuits Lab I",
                    "credit": "2"
                },
                {
                    "code": "EC2209",
                    "text": "Data structures and Object Oriented Programming Lab",
                    "credit": "2"
                },
                {
                    "code": "EC2251",
                    "text": "Electronic Circuits II",
                    "credit": "4"
                },
                {
                    "code": "EC2252",
                    "text": "Communication Theory",
                    "credit": "4"
                },
                {
                    "code": "EC2253",
                    "text": "Electromagnetic Fields",
                    "credit": "4"
                },
                {
                    "code": "EC2254",
                    "text": "Linear Integrated Circuits",
                    "credit": "3"
                },
                {
                    "code": "EC2255",
                    "text": "Control Systems",
                    "credit": "3"
                },
                {
                    "code": "EC2257",
                    "text": "Electronics circuits II and simulation lab",
                    "credit": "2"
                },
                {
                    "code": "EC2258",
                    "text": "Linear Integrated Circuit Lab",
                    "credit": "2"
                },
                {
                    "code": "EC2259",
                    "text": "Electrical Engineering and Control System Lab",
                    "credit": "2"
                },
                {
                    "code": "EC2301",
                    "text": "Digital Communication",
                    "credit": "3"
                },
                {
                    "code": "EC2302",
                    "text": "Digital Signal Processing",
                    "credit": "4"
                },
                {
                    "code": "EC2303",
                    "text": "Computer Architecture and Organization",
                    "credit": "3"
                },
                {
                    "code": "EC2304",
                    "text": "Microprocessors and Microcontrollers",
                    "credit": "4"
                },
                {
                    "code": "EC2305",
                    "text": "Transmission Lines and Wave guides",
                    "credit": "4"
                },
                {
                    "code": "EC2306",
                    "text": "Digital Signal Processing Lab",
                    "credit": "2"
                },
                {
                    "code": "EC2307",
                    "text": "Communication System Lab",
                    "credit": "2"
                },
                {
                    "code": "EC2308",
                    "text": "Microprocessors and Microcontrollers Lab",
                    "credit": "2"
                },
                {
                    "code": "EC2351",
                    "text": "Measurements and Instrumentation",
                    "credit": "3"
                },
                {
                    "code": "EC2352",
                    "text": "Computer Networks",
                    "credit": "3"
                },
                {
                    "code": "EC2353",
                    "text": "Antenna and Wave Propagation",
                    "credit": "4"
                },
                {
                    "code": "EC2354",
                    "text": "VLSI Design",
                    "credit": "3"
                },
                {
                    "code": "EC2356",
                    "text": "Computer Networks Lab",
                    "credit": "2"
                },
                {
                    "code": "EC2357",
                    "text": "VLSI Design Lab",
                    "credit": "2"
                },
                {
                    "code": "EC2401",
                    "text": "Wireless Communication",
                    "credit": "3"
                },
                {
                    "code": "EC2402",
                    "text": "Optical Communication and Networks",
                    "credit": "3"
                },
                {
                    "code": "EC2403",
                    "text": "RF and Microwave Engineering",
                    "credit": "3"
                },
                {
                    "code": "EC2404",
                    "text": "Electronics System Design Lab",
                    "credit": "2"
                },
                {
                    "code": "EC2405",
                    "text": "Optical & Microwave Lab",
                    "credit": "2"
                },
                {
                    "code": "EC2451",
                    "text": "Project Work",
                    "credit": "6"
                },
                {
                    "code": "EE2151",
                    "text": "Circuit Theory",
                    "credit": "4"
                },
                {
                    "code": "EE2155",
                    "text": "Electrical Circuits Laboratory",
                    "credit": "2"
                },
                {
                    "code": "EE2365",
                    "text": "Control Engineering",
                    "credit": "3"
                },
                {
                    "code": "EE2402",
                    "text": "Environmental Chemistry And  Microbiology",
                    "credit": "3"
                },
                {
                    "code": "EN3001",
                    "text": "Wealth From Waste",
                    "credit": "3"
                },
                {
                    "code": "EN3002",
                    "text": "Sustainable Development",
                    "credit": "3"
                },
                {
                    "code": "EN3003",
                    "text": "Environmental Policy And Law",
                    "credit": "3"
                },
                {
                    "code": "EN3004",
                    "text": "Wind Power Engineering",
                    "credit": "3"
                },
                {
                    "code": "EN3005",
                    "text": "Water Power Engineering",
                    "credit": "3"
                },
                {
                    "code": "EN3006",
                    "text": "Tidal Engineering",
                    "credit": "3"
                },
                {
                    "code": "EN3007",
                    "text": "Geo-Thermal Engineering",
                    "credit": "3"
                },
                {
                    "code": "EN3008",
                    "text": "Coastal Zone Management",
                    "credit": "3"
                },
                {
                    "code": "EN3009",
                    "text": "Green Building Design",
                    "credit": "3"
                },
                {
                    "code": "EN3013",
                    "text": "Process Safety And Loss Prevention",
                    "credit": "3"
                },
                {
                    "code": "EN3014",
                    "text": "Space Technology And Waste Disposal",
                    "credit": "3"
                },
                {
                    "code": "EN3015",
                    "text": "Climatology And Meteorology",
                    "credit": "3"
                },
                {
                    "code": "EN3016",
                    "text": "Epidemiology And Control Of Communicable Diseases",
                    "credit": "3"
                },
                {
                    "code": "EN3017",
                    "text": "Low Carbon Economy",
                    "credit": "3"
                },
                {
                    "code": "EN3018",
                    "text": "Nuclear Energy",
                    "credit": "3"
                },
                {
                    "code": "EN3019",
                    "text": "Solar Energy",
                    "credit": "3"
                },
                {
                    "code": "EN3020",
                    "text": "Site Assessment And Remediation",
                    "credit": "3"
                },
                {
                    "code": "EN3021",
                    "text": "Urban And Rural Sanitation",
                    "credit": "3"
                },
                {
                    "code": "EN3022",
                    "text": "Engineering Economics And Cost Analysis",
                    "credit": "3"
                },
                {
                    "code": "EN3023",
                    "text": "Urban And Rural Planning",
                    "credit": "3"
                },
                {
                    "code": "EN3024",
                    "text": "Risk Analysis",
                    "credit": "3"
                },
                {
                    "code": "EN3213",
                    "text": "Ecology",
                    "credit": "3"
                },
                {
                    "code": "EN3217",
                    "text": "Environmental Engineering Laboratory- II",
                    "credit": "2"
                },
                {
                    "code": "EN3218",
                    "text": "Microbiology Laboratory",
                    "credit": "2"
                },
                {
                    "code": "EN3301",
                    "text": "Solid Waste Management",
                    "credit": "3"
                },
                {
                    "code": "EN3302",
                    "text": "Air Pollution And Control",
                    "credit": "3"
                },
                {
                    "code": "EN3303",
                    "text": "Wastewater Engineering - I",
                    "credit": "3"
                },
                {
                    "code": "EN3304",
                    "text": "Noise Pollution And Control",
                    "credit": "3"
                },
                {
                    "code": "EN3305",
                    "text": "Energy Engineering",
                    "credit": "3"
                },
                {
                    "code": "EN3306",
                    "text": "Occupational Hazards And Industrial Hygiene",
                    "credit": "3"
                },
                {
                    "code": "EN3307",
                    "text": "Air and Noise Pollution Laboratory",
                    "credit": "2"
                },
                {
                    "code": "EN3309",
                    "text": "Environmental Engineering Laboratory – III",
                    "credit": "2"
                },
                {
                    "code": "EN3310",
                    "text": "Wastewater Engineering - II",
                    "credit": "3"
                },
                {
                    "code": "EN3311",
                    "text": "Environmental Instrumentation",
                    "credit": "3"
                },
                {
                    "code": "EN3312",
                    "text": "GIS For Environmental Engineers",
                    "credit": "3"
                },
                {
                    "code": "EN3314",
                    "text": "Cleaner Production",
                    "credit": "3"
                },
                {
                    "code": "EN3315",
                    "text": "Environmental Instrumentation Laboratory",
                    "credit": "2"
                },
                {
                    "code": "EN3316",
                    "text": "Environmental Engineering Design And Drawing",
                    "credit": "2"
                },
                {
                    "code": "EN3317",
                    "text": "G I S  Laboratory",
                    "credit": "2"
                },
                {
                    "code": "EN3401",
                    "text": "Disaster Management",
                    "credit": "3"
                },
                {
                    "code": "EN3402",
                    "text": "Transport Of Water And Wastewater",
                    "credit": "3"
                },
                {
                    "code": "EN3403",
                    "text": "Hazardous Waste Management",
                    "credit": "3"
                },
                {
                    "code": "EN3404",
                    "text": "Industrial Waste Management",
                    "credit": "3"
                },
                {
                    "code": "EN3405",
                    "text": "Plant Lay out Design",
                    "credit": "2"
                },
                {
                    "code": "EN3406",
                    "text": "Industrial Safety Laboratory",
                    "credit": "2"
                },
                {
                    "code": "EN3407",
                    "text": "Project Management Software",
                    "credit": "2"
                },
                {
                    "code": "EN3408",
                    "text": "Environmental Impact Assessment",
                    "credit": "3"
                },
                {
                    "code": "EN3409",
                    "text": "Project Work",
                    "credit": "8"
                },
                {
                    "code": "GE2021",
                    "text": "Environmental Science & Engineering",
                    "credit": "3"
                },
                {
                    "code": "GE2021",
                    "text": "Environmental Science and Engineering",
                    "credit": "3"
                },
                {
                    "code": "GE2022",
                    "text": "Total Quality Management",
                    "credit": "3"
                },
                {
                    "code": "GE2023",
                    "text": "Fundamental of Nano Science",
                    "credit": "3"
                },
                {
                    "code": "GE2023",
                    "text": "Fundamentals of Nanoscience",
                    "credit": "3"
                },
                {
                    "code": "GE2025",
                    "text": "Professional Ethics",
                    "credit": "3"
                },
                {
                    "code": "GE2025",
                    "text": "Professional Ethics in Engineering",
                    "credit": "3"
                },
                {
                    "code": "GE2025",
                    "text": "Professional Ethics In Engineering",
                    "credit": "3"
                },
                {
                    "code": "GE2071",
                    "text": "Intellectual Property Rights",
                    "credit": "3"
                },
                {
                    "code": "GE2071",
                    "text": "Intellectual Property Rights (IPR)",
                    "credit": "3"
                },
                {
                    "code": "GE2072",
                    "text": "Indian Constitution and Society",
                    "credit": "3"
                },
                {
                    "code": "GE2073",
                    "text": "Contract Laws and Regulations",
                    "credit": "3"
                },
                {
                    "code": "GE2111",
                    "text": "Engineering Graphics",
                    "credit": "5"
                },
                {
                    "code": "GE2112",
                    "text": "Fundamentals of Computing and Programming",
                    "credit": "3"
                },
                {
                    "code": "GE2115",
                    "text": "Computer Practices Laboratory - 1",
                    "credit": "2"
                },
                {
                    "code": "GE2116",
                    "text": "Engineering Practices Laboratory - 1",
                    "credit": "2"
                },
                {
                    "code": "GE2151",
                    "text": "Basic Electrical & Electronics Engineering",
                    "credit": "4"
                },
                {
                    "code": "GE2152",
                    "text": "Basic Civil & Mechanical Engineering",
                    "credit": "4"
                },
                {
                    "code": "GE2155",
                    "text": "Computer Practice Laboratory-II",
                    "credit": "2"
                },
                {
                    "code": "GE2321",
                    "text": "Communication Skills Lab",
                    "credit": "2"
                },
                {
                    "code": "GE2321",
                    "text": "Communication Skills Laboratory",
                    "credit": "2"
                },
                {
                    "code": "GE3022",
                    "text": "Professional Ethics in Engineering",
                    "credit": "3"
                },
                {
                    "code": "GE3023",
                    "text": "Fundamentals of Nanoscience",
                    "credit": "3"
                },
                {
                    "code": "GE3206",
                    "text": "Principles Of Environmental Science And Engineering",
                    "credit": "3"
                },
                {
                    "code": "GE3213",
                    "text": "Environmental Science and Engineering",
                    "credit": "3"
                },
                {
                    "code": "GE3318",
                    "text": "Communication Skills and Soft Skills Lab",
                    "credit": "1"
                },
                {
                    "code": "GE3318",
                    "text": "Communication Skills and Soft Skills",
                    "credit": "1"
                },
                {
                    "code": "GE3403",
                    "text": "Total Quality Management",
                    "credit": "3"
                },
                {
                    "code": "GI3001",
                    "text": "Close Range Photogrammetry",
                    "credit": "3"
                },
                {
                    "code": "GI3002",
                    "text": "Advanced Cartography",
                    "credit": "3"
                },
                {
                    "code": "GI3003",
                    "text": "Advanced Survey Adjustment",
                    "credit": "3"
                },
                {
                    "code": "GI3004",
                    "text": "Airborne Laser Terrain Mapping",
                    "credit": "3"
                },
                {
                    "code": "GI3005",
                    "text": "Remote Sensing and GIS for Hydrology and Water",
                    "credit": "3"
                },
                {
                    "code": "GI3006",
                    "text": "Remote Sensing and GIS for Ocean Engineering and Coastal Zone Management",
                    "credit": "3"
                },
                {
                    "code": "GI3007",
                    "text": "Remote Sensing and GIS for Environmental Monitoring",
                    "credit": "3"
                },
                {
                    "code": "GI3008",
                    "text": "Remote Sensing and GIS for Urban and Regional Planning",
                    "credit": "3"
                },
                {
                    "code": "GI3009",
                    "text": "Remote Sensing and GIS for Earth Sciences",
                    "credit": "3"
                },
                {
                    "code": "GI3010",
                    "text": "Remote Sensing and GIS for Agriculture and Forestr",
                    "credit": "3"
                },
                {
                    "code": "GI3011",
                    "text": "Remote Sensing and GIS for Meteorology",
                    "credit": "3"
                },
                {
                    "code": "GI3012",
                    "text": "Remote Sensing and GIS for Transportation Planning",
                    "credit": "3"
                },
                {
                    "code": "GI3013",
                    "text": "Remote Sensing and GIS for Disaster Mitigation and Management",
                    "credit": "3"
                },
                {
                    "code": "GI3201",
                    "text": "Surveying I",
                    "credit": "3"
                },
                {
                    "code": "GI3202",
                    "text": "Cartography",
                    "credit": "4"
                },
                {
                    "code": "GI3203",
                    "text": "Photogrammetry I",
                    "credit": "4"
                },
                {
                    "code": "GI3204",
                    "text": "Database Systems",
                    "credit": "3"
                },
                {
                    "code": "GI3206",
                    "text": "Survey Practical I",
                    "credit": "2"
                },
                {
                    "code": "GI3207",
                    "text": "Photogrammetry Laboratory I",
                    "credit": "1"
                },
                {
                    "code": "GI3208",
                    "text": "Database System Laboratory",
                    "credit": "2"
                },
                {
                    "code": "GI3209",
                    "text": "Surveying II",
                    "credit": "3"
                },
                {
                    "code": "GI3210",
                    "text": "Digital Image Processing",
                    "credit": "3"
                },
                {
                    "code": "GI3211",
                    "text": "Object Oriented Programming",
                    "credit": "4"
                },
                {
                    "code": "GI3212",
                    "text": "Electronic Surveing",
                    "credit": "4"
                },
                {
                    "code": "GI3214",
                    "text": "Surveying Practical II",
                    "credit": "2"
                },
                {
                    "code": "GI3215",
                    "text": "Digital Image Processing Laboratory I",
                    "credit": "2"
                },
                {
                    "code": "GI3301",
                    "text": "Surveying III",
                    "credit": "3"
                },
                {
                    "code": "GI3302",
                    "text": "Microwave Remote Sensing",
                    "credit": "3"
                },
                {
                    "code": "GI3303",
                    "text": "Cadastral Surveying",
                    "credit": "3"
                },
                {
                    "code": "GI3304",
                    "text": "Geodesy",
                    "credit": "4"
                },
                {
                    "code": "GI3305",
                    "text": "Geographical Information System I",
                    "credit": "3"
                },
                {
                    "code": "GI3307",
                    "text": "Survey Practical III",
                    "credit": "2"
                },
                {
                    "code": "GI3308",
                    "text": "GIS Laboratory I",
                    "credit": "2"
                },
                {
                    "code": "GI3309",
                    "text": "Satellite Geodesy",
                    "credit": "4"
                },
                {
                    "code": "GI3310",
                    "text": "Survey Adjustment",
                    "credit": "3"
                },
                {
                    "code": "GI3311",
                    "text": "Geographical Information System II",
                    "credit": "3"
                },
                {
                    "code": "GI3312",
                    "text": "Photogrammetry II",
                    "credit": "4"
                },
                {
                    "code": "GI3315",
                    "text": "Survey Camp (During Winter)",
                    "credit": "2"
                },
                {
                    "code": "GI3316",
                    "text": "Photogrammetry Laboratory II",
                    "credit": "1"
                },
                {
                    "code": "GI3317",
                    "text": "GIS Laboratory II",
                    "credit": "2"
                },
                {
                    "code": "GI3318",
                    "text": "Technical Seminar",
                    "credit": "1"
                },
                {
                    "code": "GI3401",
                    "text": "Thermal and Hyper Spectral Remote Sensing",
                    "credit": "3"
                },
                {
                    "code": "GI3402",
                    "text": "Digital Photogrammetry",
                    "credit": "3"
                },
                {
                    "code": "GI3403",
                    "text": "Geographical Information System Applications",
                    "credit": "3"
                },
                {
                    "code": "GI3404",
                    "text": "Operations Research for Geoinformatics",
                    "credit": "3"
                },
                {
                    "code": "GI3406",
                    "text": "Digital Photogrammetry  Laboratory",
                    "credit": "2"
                },
                {
                    "code": "GI3407",
                    "text": "Digital Image Processing Laboratory II",
                    "credit": "2"
                },
                {
                    "code": "GI3410",
                    "text": "Project Work",
                    "credit": "6"
                },
                {
                    "code": "GS2165",
                    "text": "Physics & Chemistry Laboratory - II",
                    "credit": "2"
                },
                {
                    "code": "HS2111",
                    "text": "Technical English - I",
                    "credit": "4"
                },
                {
                    "code": "HS2161",
                    "text": "Technical English – II",
                    "credit": "4"
                },
                {
                    "code": "IT2021",
                    "text": "Business Process Model",
                    "credit": "3"
                },
                {
                    "code": "IT2022",
                    "text": "Software Requirement Engineering",
                    "credit": "3"
                },
                {
                    "code": "IT2023",
                    "text": "Digital Image Processing",
                    "credit": "3"
                },
                {
                    "code": "IT2024",
                    "text": "User Interface Design",
                    "credit": "3"
                },
                {
                    "code": "IT2031",
                    "text": "Electronic Commerce",
                    "credit": "3"
                },
                {
                    "code": "IT2032",
                    "text": "Software Testing",
                    "credit": "3"
                },
                {
                    "code": "IT2033",
                    "text": "Bioinformatics",
                    "credit": "3"
                },
                {
                    "code": "IT2033",
                    "text": "Bio Informatics",
                    "credit": "3"
                },
                {
                    "code": "IT2034",
                    "text": "Adhoc Sensor Network",
                    "credit": "3"
                },
                {
                    "code": "IT2041",
                    "text": "Enterprise Resource Planning",
                    "credit": "3"
                },
                {
                    "code": "IT2042",
                    "text": "Information Security",
                    "credit": "3"
                },
                {
                    "code": "IT2043",
                    "text": "Knowledge Management",
                    "credit": "3"
                },
                {
                    "code": "IT2050",
                    "text": "Principles of Compiler Design",
                    "credit": "3"
                },
                {
                    "code": "IT2051",
                    "text": "Knowledge Engineering",
                    "credit": "3"
                },
                {
                    "code": "IT2052",
                    "text": "Management Information System",
                    "credit": "3"
                },
                {
                    "code": "IT2053",
                    "text": "Software Design",
                    "credit": "3"
                },
                {
                    "code": "IT2061",
                    "text": "System Modeling and Simulation",
                    "credit": "3"
                },
                {
                    "code": "IT2061",
                    "text": "Systems Modeling & Simulation",
                    "credit": "3"
                },
                {
                    "code": "IT2064",
                    "text": "Speech Processing",
                    "credit": "3"
                },
                {
                    "code": "IT2201",
                    "text": "Data Structures and Algorithms",
                    "credit": "3"
                },
                {
                    "code": "IT2202",
                    "text": "Principles of Communication",
                    "credit": "4"
                },
                {
                    "code": "IT2205",
                    "text": "Data Structures and Algorithms Lab",
                    "credit": "2"
                },
                {
                    "code": "IT2251",
                    "text": "Software Engineering and Quality Assurance",
                    "credit": "3"
                },
                {
                    "code": "IT2301",
                    "text": "Java Programming",
                    "credit": "3"
                },
                {
                    "code": "IT2302",
                    "text": "Information Theory and Coding",
                    "credit": "3"
                },
                {
                    "code": "IT2305",
                    "text": "Java Programming Lab",
                    "credit": "2"
                },
                {
                    "code": "IT2351",
                    "text": "Network Programming and Managemen",
                    "credit": "3"
                },
                {
                    "code": "IT2351",
                    "text": "Network Programming and Management",
                    "credit": "3"
                },
                {
                    "code": "IT2352",
                    "text": "Cryptography and Network Security",
                    "credit": "3"
                },
                {
                    "code": "IT2353",
                    "text": "Web Technology",
                    "credit": "3"
                },
                {
                    "code": "IT2354",
                    "text": "Embedded Systems",
                    "credit": "3"
                },
                {
                    "code": "IT2357",
                    "text": "Web Technology Lab",
                    "credit": "2"
                },
                {
                    "code": "IT2401",
                    "text": "Service Oriented Architecture",
                    "credit": "3"
                },
                {
                    "code": "IT2402",
                    "text": "Mobile Communication",
                    "credit": "3"
                },
                {
                    "code": "IT2403",
                    "text": "Software Project Management",
                    "credit": "3"
                },
                {
                    "code": "IT2406",
                    "text": "Service Oriented Architecture Lab",
                    "credit": "2"
                },
                {
                    "code": "IT2451",
                    "text": "Project",
                    "credit": "6"
                },
                {
                    "code": "MA2111",
                    "text": "Mathematics – I",
                    "credit": "4"
                },
                {
                    "code": "MA2161",
                    "text": "Mathematics - II",
                    "credit": "4"
                },
                {
                    "code": "MA2211",
                    "text": "Transforms and Partial Differential Equations",
                    "credit": "4"
                },
                {
                    "code": "MA2211",
                    "text": "Transforms And Partial Differential Equations",
                    "credit": "4"
                },
                {
                    "code": "MA2261",
                    "text": "Probability and Random Processes",
                    "credit": "4"
                },
                {
                    "code": "MA2262",
                    "text": "Probability and Queueing Theory",
                    "credit": "4"
                },
                {
                    "code": "MA2264",
                    "text": "Numerical Methods",
                    "credit": "4"
                },
                {
                    "code": "MA2265",
                    "text": "Discrete Mathematics",
                    "credit": "4"
                },
                {
                    "code": "MA2266",
                    "text": "Statistics And Numerical Methods",
                    "credit": "4"
                },
                {
                    "code": "MA3201",
                    "text": "Mathematics – III",
                    "credit": "4"
                },
                {
                    "code": "MA3211",
                    "text": "Probability And Statistics",
                    "credit": "4"
                },
                {
                    "code": "MA3211",
                    "text": "Probability and Statistics",
                    "credit": "4"
                },
                {
                    "code": "ME 2029",
                    "text": "Design of Jigs, Fixtures and Press Tools",
                    "credit": "3"
                },
                {
                    "code": "ME2021",
                    "text": "Quality Control and Reliability Engineering",
                    "credit": "3"
                },
                {
                    "code": "ME2028",
                    "text": "Robotics",
                    "credit": "3"
                },
                {
                    "code": "ME2030",
                    "text": "Composite Materials",
                    "credit": "3"
                },
                {
                    "code": "ME2035",
                    "text": "Entrepreneurship Development",
                    "credit": "3"
                },
                {
                    "code": "ME2038",
                    "text": "Operations Research",
                    "credit": "3"
                },
                {
                    "code": "ME2151",
                    "text": "Engineering Mechanics",
                    "credit": "4"
                },
                {
                    "code": "ME2155",
                    "text": "Computer Aided Drafting and Modeling Laboratory",
                    "credit": "2"
                },
                {
                    "code": "ME2204",
                    "text": "Fluid Mechanics and Machinery",
                    "credit": "4"
                },
                {
                    "code": "ME2208",
                    "text": "Fluid Mechanics and Machinery Lab",
                    "credit": "2"
                },
                {
                    "code": "ME2253",
                    "text": "Engineering Materials and Metallurgy",
                    "credit": "3"
                },
                {
                    "code": "ME2254",
                    "text": "Strength of Materials",
                    "credit": "4"
                },
                {
                    "code": "ME2255",
                    "text": "Electronics and Microprocessors",
                    "credit": "3"
                },
                {
                    "code": "ME2256",
                    "text": "Strength of Materials Lab",
                    "credit": "2"
                },
                {
                    "code": "ME2303",
                    "text": "Design of Machine Elements",
                    "credit": "4"
                },
                {
                    "code": "ME2309",
                    "text": "CAD and CAM Laboratory",
                    "credit": "2"
                },
                {
                    "code": "ME2353",
                    "text": "Finite Element Analysis",
                    "credit": "4"
                },
                {
                    "code": "MG2021",
                    "text": "Marketing Management",
                    "credit": "3"
                },
                {
                    "code": "MG2351",
                    "text": "Principles of Management",
                    "credit": "3"
                },
                {
                    "code": "MG2452",
                    "text": "Engineering Economics & Financial Accounting",
                    "credit": "3"
                },
                {
                    "code": "MG2453",
                    "text": "Resource Management Techniques",
                    "credit": "3"
                },
                {
                    "code": "MG3313",
                    "text": "Principles Of Management",
                    "credit": "3"
                },
                {
                    "code": "PH2111",
                    "text": "Engineering Physics - I",
                    "credit": "3"
                },
                {
                    "code": "PH2161",
                    "text": "Engineering Physics - II",
                    "credit": "3"
                }
            ]
        }