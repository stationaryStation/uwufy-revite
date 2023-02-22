.replace(/(?:l|r)/g, 'w')
                    .replace(/(?:L|R)/g, 'W')
                    .replace(/n([aeiou])/g, 'ny$1')
                    .replace(/N([aeiou])/g, 'Ny$1')
                    .replace(/N([AEIOU])/g, 'NY$1')
                    .replace(/ove/g, 'uv')
                    .replace(/OVE/g, 'UV');