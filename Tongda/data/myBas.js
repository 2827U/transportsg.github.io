EDSFormats.myBas = {
    standardService: {
        serviceNumber: {
            align: "left",
            margin: {
                left: 1
            },
            text: "$serviceNumber",
            font: "Mobitec-16:8",
            spacing: 1
        },
        destination: {
            align: "right,bottom",
            margin: {
                right: 1
            },
            text: "$destination",
            spacing: 1
        },
        scroll: {
            align: "right,top",
            margin: {
                right: 1,
                top: 1
            },
            scrolls: "$scrolls",
            rotate: true,
            rotateSpeed: 3000,

            font: "$scrollFont",
            spacing: 1
        },
        text: "$serviceNumber+' '+$destination.text"
    },
    full: {
        __dynamic__: (matrix, data) => {
            matrixPrimitives.setStrokeColour(null);
            matrixPrimitives.fillRectangle(matrix, 0, 0, matrix.width, matrix.height);
        },
        text: "All LED Lit"
    },
    message: {
        display: {
            align: "centre-x,centre-y",
            text: "$text",
            font: "$font",
            spacing: "$spacing"
        },

        text: "$text"
    }
}

EDSData.myBas = {
    1: {
        front: {
            renderType: "full"
        }
    },
    641: {
        front: {
            renderType: "standardService",
            serviceNumber: "64",
            destination: {
                text: "> MEI LING ST",
                font: "Mobitec-7:5:2"
            },
            scrolls: [
                "ALJUNIED RD",
                "BENDEMEER RD",
                "JALAN BESAR",
                "CLEMENCEAU AVE",
                "TIONG BAHRU RD",
                "STIRLING RD"
            ],
            scrollFont: "Mobitec-6:5"
        }
    },
    2: {
        front: {
            renderType: "message",
            text: "TONGDA",
            font: "Mobitec-16:8",
            spacing: 2,
        }
    }
}

EDSExtras.myBas = {
}

EDSImages.myBas = {
}
