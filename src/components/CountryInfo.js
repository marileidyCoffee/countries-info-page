// countryInfo
import Border from './Borders'

function CountryInfo({ info } ) {
        const languages = Object.values(info.languages || {});
        const currencies = info.currencies;
        const native = info.name.nativeName;
        const borders = info.borders;
        const currenciesNames = Object.values(currencies).map(currency => currency.name);
        const nativeNames = native ? Object.values(native).map(x=>x.common) : null;
        const bordersNames = borders ? Object.values(borders) : null;

        return (
            <main>
                <div className="countryInfo">
                    <div className="countryInfo-img">
                        <img src={info.flags.svg} alt={info.flags.alt} /> 
                    </div>
                    <div className="countryInfo-txt">
                        <div className="countryInfo-txt-title"><h2>{info.name.common}</h2></div> 
                        <div className="countryInfo-txt-body">
                            <div>
                                <p>Native Name: <span>{nativeNames.join(", ")}</span></p>
                                <p>Population: <span>{info.population}</span></p>
                                <p>Region: <span>{info.region}</span></p>
                                <p>Sub Region: <span>{info.subregion}</span></p>
                                <p>Capital: <span>{info.capital}</span></p>
                            </div>
                            <div>
                                <p>Top Level Domain: <span>{info.tld}</span></p>
                                <p>Currencies: <span>{currenciesNames.join(", ")}</span></p>
                                <p>Languages: <span>{languages.join(", ")}</span></p>
                            </div>
                        </div>
                        <div className="countryInfo-txt-foot">
                            {bordersNames ? (
                                <>
                                    <p>
                                    <span>Border Countries: </span>
                                        {bordersNames.map(bordercode => (
                                            <Border key={bordercode} bordercode={bordercode} />
                                        ))}
                                    </p>
                                </>
                            ) : (
                                <p>No hay fronteras disponibles</p>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        );

}

export default CountryInfo;
