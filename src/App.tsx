import { atom, useAtom } from "jotai";
import { useSyncExternalStore } from "react";
import { useAtomValue } from "jotai";

const salaryAtom = atom(100_000);
const bonusAtom = atom(10_000);
const totalSalaryAtom = atom((get) => get(salaryAtom) + get(bonusAtom));
const dataAtom = atom(() => fetch("/data.json").then((res) => res.json()));
const keysAtom = atom((get) => Object.keys(get(dataAtom) ?? {}));

function SalaryDisPlay() {
  const salary = useAtomValue(salaryAtom);
  return <div>SalaryDisPlay: {salary}</div>;
}

function App() {
  const [salary, setSalary] = useAtom(salaryAtom);
  const [bonus, setBonus] = useAtom(bonusAtom);
  const totalSalary = useAtomValue(totalSalaryAtom);
  const data = useAtomValue(dataAtom);
  const keys = useAtomValue(keysAtom);

  return (
    <div>
      <div>
        <input value={salary} onChange={(e) => setSalary(+e.target.value)} />
      </div>
      <div>Salary: {salary}</div>
      <SalaryDisPlay />
      <div>
        <input value={bonus} onChange={(e) => setBonus(+e.target.value)} />
      </div>
      <div>Bonus: {bonus}</div>
      <div>TotalSalary: {totalSalary}</div>
      <div>data: {JSON.stringify(data)}</div>
      <div>keys: {JSON.stringify(keys)}</div>
    </div>
  );
}

export default App;
