const luasPersegi = (s) => {
    return s*s
}

const luasSegitiga = (a, t) => {
    return 0.5 * a * t
}

const luasLingkaran = (r) => {
    return 3.14 * (r ** 2)
}

const kelilingPersegi = (s) => {
    return s * 4
}

const kelilingSegitiga = (s1, s2, s3) => {
    return s1 + s2 + s3
}

const kelilingLingkaran = (r) => {
    return 2 * 3.14 * r 
}

module.exports = {
    luasLingkaran,
    luasPersegi,
    luasSegitiga,
    kelilingLingkaran,
    kelilingPersegi,
    kelilingSegitiga
}