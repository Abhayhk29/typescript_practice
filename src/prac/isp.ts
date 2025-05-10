interface DocumentManager {
    openDoucument(): void;

    closeDocument(): void;

    saveDocument(): void;

    scanDocument(): void; 
}


class BasicEditor implements DocumentManager {
    closeDocument(): void {
        
    }

    openDoucument(): void {
        
    }

    saveDocument(): void {
        
    }

    scanDocument(): void {
        
    }
}

// we can break into smaller part and use it as per usage