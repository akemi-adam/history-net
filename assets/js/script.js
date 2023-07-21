const countries = {
    US: {
        name: 'Estados Unidos',
        about: 'Os Estados Unidos, sob a liderança de Roosevelt, entraram na guerra em 1941 após o ataque a Pearl Harbor, fornecendo apoio crucial aos Aliados com sua indústria poderosa, recursos econômicos e militares, liderando a invasão da Normandia e contribuindo para a derrota do Eixo.',
        redirectUrl: './pages/estadosunidos.html'
    },
    FR: {
        name: 'França',
        about: 'Após a ocupação alemã em 1940, a França continuou lutando como parte da Resistência Francesa e apoiou os Aliados com tropas coloniais e recursos durante a libertação da Europa, desempenhando um papel importante na retomada do território francês.',
        redirectUrl: './pages/franca.html'
    },
    URSS: {
        name: 'União Soviética',
        about: 'A União Soviética, liderada por Joseph Stalin, foi um aliado crucial na Segunda Guerra Mundial, resistindo à invasão alemã e contribuindo para a derrota da Alemanha nazista com sua força militar e produção industrial.',
        redirectUrl: './pages/uniaosovietica.html'
    },
    UK: {
        name: 'Reino Unido',
        about: 'Liderado por Churchill, o Reino Unido resistiu à Alemanha nazista desde o início da guerra, defendendo-se na Batalha da Grã-Bretanha e liderando operações aliadas na Europa Ocidental, desempenhando um papel essencial na derrota do Eixo.',
        redirectUrl: './pages/reinounido.html'
    },
    JP: {
        name: 'Japão',
        about: 'O Japão, liderado pelo imperador Hirohito, também fez parte do Eixo. O país buscava a expansão territorial no Pacífico e lançou o ataque a Pearl Harbor em 1941, provocando a entrada dos Estados Unidos na guerra. No entanto, as derrotas nas batalhas navais de Midway e Guadalcanal e a pressão dos Aliados resultaram na rendição do Japão em 1945.',
        redirectUrl: './pages/japao.html'
    },
    IT: {
        name: 'Itália',
        about: 'A Itália, governada por Benito Mussolini, foi um aliado da Alemanha nazista. Apesar de ter participado de algumas campanhas militares bem-sucedidas no início da guerra, como a invasão da Albânia, a Itália sofreu várias derrotas e seu apoio aos alemães acabou se enfraquecendo à medida que a guerra progredia.',
        redirectUrl: './pages/italia.html'
    },
    DE: {
        name: 'Alemanha',
        about: 'A Alemanha, liderada por Adolf Hitler, foi a principal força do Eixo na Segunda Guerra Mundial. Buscando a expansão territorial e a implementação de sua ideologia nazista, a Alemanha invadiu diversos países europeus e travou batalhas significativas, mas acabou derrotada pelos Aliados.',
        redirectUrl: './pages/alemanha.html'
    },
}

const setAboutText = ({ name, about, redirectUrl }) => `
    <h2><a href="${redirectUrl}">${name}</a></h2>
    <p>${about}</p>
`

const aboutCountryDiv = document.getElementById('about-country')
const selectedCountry = document.getElementById('select-country')

aboutCountryDiv.innerHTML = setAboutText(countries.US)

selectedCountry.addEventListener('click', () => aboutCountryDiv.innerHTML = setAboutText(countries[selectedCountry.value]))