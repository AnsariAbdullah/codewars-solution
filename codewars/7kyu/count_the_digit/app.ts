export class G964 {
    public static nbDig(n: number, d: number): number {
        const digit = String(d);
        let count = 0;

        for (let k = 0; k <= n; k++) {
            const squareStr = String(k * k);
            for (const ch of squareStr) {
                if (ch === digit) count++;
            }
        }

        return count;
    }
}