import { formatter } from "../util/investment";

const T_HEAD = ["Year", "Investements value", "Investements(Year)", "Total investements", "Invested Capital"];
function Results({ results }) {
    let total = 0;
    console.log(results);
    return <table id="result">
        <thead>
            <tr>
                {T_HEAD.map(head => <th scope="col">{head}</th>)}
            </tr>
        </thead>
        <tbody>
            {
                results.map(
                    result => {
                        console.log(result.interest);
                        total += result.interest;
                        return <tr>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(total)}</td>
                            <td>{formatter.format(result.valueEndOfYear - total)}</td>
                        </tr>

                    }
                )}
        </tbody>
    </table>;
}
export default Results;