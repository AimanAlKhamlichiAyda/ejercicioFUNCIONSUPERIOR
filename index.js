
// una función callback, el nombre de la función puede ser cualquier nombre
const callback = (n) => {
    return n ** 2
}

// función que toma otra función como callback
function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 3))


//==================Ejercicios: Nivel 1==================

const names = ["Alfred", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];
//1.Explique la diferencia entre forEach, map, filter, and reduce.
/*forEach se utiliza para iterar sobre una matriz y 
realizar una operación en cada elemento, map se
 utiliza para crear una nueva matriz a partir de una 
 matriz existente, filter se utiliza para crear una 
 nueva matriz que contenga solo los elementos que 
 cumplen con cierta condición y reduce se utiliza para
  reducir una matriz a un único valor.*/
//2.Defina una función callback antes de utilizarla en forEach, map, filter o reduce
function multiplyByTwo(element) {
    return element * 2;
}
const arr = [1, 2, 3, 4];
const arrDoubled = arr.map(multiplyByTwo);
console.log(arrDoubled);

//3.Utiliza forEach para mostrar con console.log cada país del array de países.
countries.forEach(function (country) {
    console.log(country);
});
//4.Utiliza forEach para mostrar con console.log cada nombre del array de nombres.
names.forEach(function (name) {
    console.log(name);
});
//5.Utiliza forEach para mostrar con console.log cada número del array de números.
numbers.forEach(function (number) {
    console.log(number);
});
//6.Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
const countriesUpperCase = countries.map(function (country) {
    return country.toUpperCase();
});

console.log(countriesUpperCase);
//7.Utilice map para crear un array de longitudes de países a partir del array de países.
const countriesLengths = countries.map(function (country) {
    return country.length;
});

console.log(countriesLengths);
//8.Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.
const squaredNumbers = numbers.map(function (number) {
    return number * number;
});

console.log(squaredNumbers);
//9.Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.
const namesUpperCase = names.map(function (name) {
    return name.toUpperCase();
});

console.log(namesUpperCase);
//10.Utilice map para asignar el array de productos a sus correspondientes precios.
const prices = products.map(function (product) {
    return product.price;
});

console.log(prices);
//11.Utilice filter para filtrar los países que contienen land.
const countriesWithLand = countries.filter(function (country) {
    return country.includes("land");
});

console.log(countriesWithLand);
//12.Utilice filter para filtrar los países que tienen seis caracteres.

const countriesWithSixChars = countries.filter(function (country) {
    return country.length === 6;
});

console.log(countriesWithSixChars);

//13.Utilice filter para filtrar los países que contengan seis letras o más en el array de países.
const countriesWithSixOrMoreChars = countries.filter(function (country) {
    return country.length >= 6;
});

console.log(countriesWithSixOrMoreChars);

//14.Utilice filter para filtrar los países que empiezan por "E";

const countriesStartingWithE = countries.filter(function (country) {
    return country.startsWith("E");
});

console.log(countriesStartingWithE);
//15.Utilice filter para filtrar sólo los precios con valores.
const productsWithPrice = products.filter(product => Boolean(product.price));
console.log(productsWithPrice);

//16.Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.
function getStringLists(arr) {
    return arr.filter(element => typeof element === "string");
}
const stringList = getStringLists(arr);
console.log(stringList);
//17.Usa reduce para sumar todos los números del array de números.

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);
//18.Utiliza reduce para concatenar todos los países y producir esta frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa

const phrase = countries.reduce((accumulator, currentValue, currentIndex) => {
    if (currentIndex === countries.length - 1) {
        return `${accumulator} y ${currentValue} son países del norte de Europa`;
    }
    return `${accumulator}, ${currentValue}`;
});

console.log(phrase);
//19.Explique la diferencia entre some y every
//some() comprueba si al menos un elemento cumple con una condición dada, mientras que every() comprueba si todos los elementos cumplen con una condición dada.
//20.Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.
const resultFourSome = names.some((name) => name.length > 7);
console.log(resultFourSome);
//21.Utilice every para comprobar si todos los países contienen la palabra land.
const resultFourEvery = countries.every((country) => country.includes("land"));
console.log(resultFourEvery);
//22.Explique la diferencia entre find y findIndex
//la diferencia principal entre find y findIndex es que find devuelve el valor del elemento que cumple la condición, mientras que findIndex devuelve el índice de ese elemento. Si sólo se necesita conocer si existe un elemento que cumpla la condición, y no se necesita el valor o el índice del mismo, se puede utilizar some() en su lugar.
//23.Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países.
const resultFind = countries.find((country) => country.length === 6);
console.log(resultFind);
//24.Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países.
const resultFindIndex = countries.findIndex((country) => country.length === 6);
console.log(resultFindIndex);
//25.Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1.
const norwayIndex = countries.findIndex((country) => country === "Norway");
console.log(norwayIndex);
//26.Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1.
const russiaIndex = countries.findIndex((country) => country === "Russia");
console.log(russiaIndex);


//=============== Nivel 2===================
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

//1.Encuentre el precio total de los productos encadenando dos o más iteradores de matrices (por ejemplo, arr.map(callback).filter(callback).reduce(callback)).
const total = products
    .filter((product) => typeof product.price === "number")
    .map((product) => product.price)
    .reduce((acc, cur) => acc + cur, 0);

console.log(total);
//2.Encuentre la suma del precio de los productos usando sólo reduce(callback)).

const totalSum = products.reduce((acc, cur) => {
    if (typeof cur.price === "number") {
        return acc + cur.price;
    } else {
        return acc;
    }
}, 0);

console.log(totalSum);
//3.Declara una función llamada categorizeCountries que retorna un array de países que tienen algún patrón común (encuentras el array de países en este repositorio como countries.js(ej 'land', 'ia', 'island','stan')).
function categorizeCountries(patterns) {
    const filteredCountries = countries.filter(country => {
        return patterns.some(pattern => country.toLowerCase().includes(pattern));
    });
    return filteredCountries;
}
const patterns = ['land', 'ia', 'island', 'stan'];
const categorized = categorizeCountries(patterns);
console.log(categorized);
//4.Cree una función que retorne un array de objetos, que es la letra y el número de veces que la letra usa para empezar el nombre de un país.
function countStartingLetters(countries) {
    const startingLetters = {};
    for (const country of countries) {
        const firstLetter = country.charAt(0).toUpperCase();
        startingLetters[firstLetter] = startingLetters[firstLetter] + 1 || 1;
    }
    const result = Object.entries(startingLetters).map(([letter, count]) => ({
        letter,
        count,
    }));
    return result;
}
const countedLetters = countStartingLetters(countries);
console.log(countedLetters);
//5.Declara una función getFirstTenCountries y retorna un array de diez países. Utiliza diferente programación funcional para trabajar en el array countries.js.
function getFirstTenCountries(countriesArr) {
    return countriesArr.slice(0, 10);
}

const firstTenCountries = getFirstTenCountries(countries);

console.log(firstTenCountries);
//6.Declara una función getLastTenCountries que devuelve los últimos diez países del array de países.

function getLastTenCountries(countriesArr) {
    return countriesArr.slice(-10);
}

const lastTenCountries = getLastTenCountries(countries);

console.log(lastTenCountries);
//7.Encuentre qué letra se utiliza muchas veces como inicial de un nombre de país del array de países (ej. Finland, Fiji, France etc)
function findMostFrequentInitialLetter(countriesArr) {
    const initialLetters = countriesArr.map(country => country.charAt(0));
    const letterCount = {};
    let mostFrequentLetter = "";
    let highestCount = 0;

    initialLetters.forEach(letter => {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
        if (letterCount[letter] > highestCount) {
            highestCount = letterCount[letter];
            mostFrequentLetter = letter;
        }
    });

    return mostFrequentLetter;
}

const mostFrequentInitialLetter = findMostFrequentInitialLetter(countries);

console.log(mostFrequentInitialLetter);

//===========================Nivel 3==================

//1.Utiliza la información de los países, en la carpeta de datos. Ordena los países por nombre, por capital, por población

const countriesByName = countries.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});

console.log(countriesByName);
//2.Encuentre las 10 lenguas más habladas:
/*const topLanguages = languages.sort((a, b) => {
    return b.speakers - a.speakers;
  }).slice(0, 10);
  
  console.log(topLanguages);*/
//3.Utilice el archivo countries_data.js para crear una función que cree los diez países más poblados.
/*
function getTenMostPopulatedCountries() {
    const sortedCountries = countriesData.sort((a, b) => {
      return b.population - a.population;
    });
  
    return sortedCountries.slice(0, 10);
  }
  
  console.log(getTenMostPopulatedCountries());*/
//4.Intenta desarrollar un programa que calcule la medida de tendencia central de una muestra(mean, median, mode) y medida de la variabilidad(range, variance, standard deviation). Además de esas medidas, encuentre el mínimo, el máximo, el recuento, el porcentaje y la distribución de frecuencias de la muestra. Puede crear un objeto llamado estadísticas y crear todas las funciones que hacen cálculos estadísticos como método para el objeto estadísticas. Comprueba el resultado que aparece a continuación.
const statistics = {
    mean: function (arr) {
        const sum = arr.reduce((acc, val) => acc + val);
        return sum / arr.length;
    },
    median: function (arr) {
        const sorted = arr.sort((a, b) => a - b);
        const mid = Math.floor(arr.length / 2);
        return arr.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    },
    mode: function (arr) {
        const frequency = {};
        let maxFreq = 0;
        let mode = [];

        for (let i = 0; i < arr.length; i++) {
            const val = arr[i];
            frequency[val] = frequency[val] || 0;
            frequency[val]++;
            if (frequency[val] > maxFreq) {
                maxFreq = frequency[val];
                mode = [val];
            } else if (frequency[val] === maxFreq) {
                mode.push(val);
            }
        }

        return mode.length === arr.length ? null : mode;
    },
    range: function (arr) {
        const sorted = arr.sort((a, b) => a - b);
        return sorted[sorted.length - 1] - sorted[0];
    },
    variance: function (arr) {
        const mean = statistics.mean(arr);
        const differences = arr.map((val) => (val - mean) ** 2);
        const sumOfDiffs = differences.reduce((acc, val) => acc + val);
        return sumOfDiffs / arr.length;
    },
    standardDeviation: function (arr) {
        return Math.sqrt(statistics.variance(arr));
    },
    min: function (arr) {
        return Math.min(...arr);
    },
    max: function (arr) {
        return Math.max(...arr);
    },
    count: function (arr) {
        return arr.length;
    },
    percentage: function (arr, val) {
        const count = arr.filter((el) => el === val).length;
        return (count / arr.length) * 100;
    },
    frequencyDistribution: function (arr) {
        const frequency = {};
        for (let i = 0; i < arr.length; i++) {
            const val = arr[i];
            frequency[val] = frequency[val] || 0;
            frequency[val]++;
        }
        return frequency;
    },
};

const sample = [3, 5, 6, 7, 8, 9, 11, 13, 15, 20];
console.log("Mean:", statistics.mean(sample));
console.log("Median:", statistics.median(sample));
console.log("Mode:", statistics.mode(sample));
console.log("Range:", statistics.range(sample));
console.log("Variance:", statistics.variance(sample));
console.log("Standard Deviation:", statistics.standardDeviation(sample));
console.log("Min:", statistics.min(sample));
console.log("Max:", statistics.max(sample));
console.log("Count:", statistics.count(sample));
console.log("Percentage of 7:", statistics.percentage(sample, 7));
console.log("Frequency Distribution:", statistics.frequencyDistribution(sample));


