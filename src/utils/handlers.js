export const formatVoteCount = (number) => {
    if (!number) return "0";

    return new Intl.NumberFormat('en-US', {
        notation: "compact",
        compactDisplay: "short",
        maximumFractionDigits: 1
    }).format(number);
};