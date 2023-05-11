export const groupSensor = [
    'AMONIACO',
    'TEMPERATURA',
    'CO2',
    'INCENDIO',
    'CONSUMO-ENERGIA',
    'HUMEDAD',
    'ENERGIA'
]

export const measurementTemp = [
    'CELSIUS',
    'ALARMA',
    'PORCENTAJE',
    'PPM',
    'VOLTAJE',
    'FRECUENCIA',
    'CORRIENTE',
    'KWH'
]

export const messages = {
    listenDeviceSuccess: 'Dispositivo registrado al pool de eventos satisfactoriamente.',
    invalidTimeHistory: 'El tiempo maximo del atributo timeHistory es 24.'
}

export const LimiteHistorialDeviceNRL = 24;

export const typeUmbralAlert = {
    MAX: 'Maximo',
    MIN: 'Minimo',
    PELIGRO: 'Peligro',    
    ACEPTABLE: 'Aceptable',
    DESC_PELIGRO_MAX: 'El dispositivo esta por arriba del nivel establecido',
    DESC_PELIGRO_MIN: 'El dispositivo esta por debajo del nivel establecido',
    DESC_ACEPTABLE: 'El dispositivo estabilizó sus valores'
}