function isClientSide(): boolean {
    return typeof window !== 'undefined';
}

export { isClientSide };